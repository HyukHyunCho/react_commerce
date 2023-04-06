import React, { useState, useEffect, SyntheticEvent } from 'react';

import { useForm, Controller, FieldValues } from 'react-hook-form';
import Layout from '../../components/common/Layout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useProductDetail } from '../../hooks/useProductDetail';
import { useAddProduct, useUpdateProduct } from '../../hooks/useSeller';

export default function SellerRegisterForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { type } = location.state;
  const { handleSubmit, control, setValue } = useForm();
  const { data } = useProductDetail(Number(id));
  const { mutate: addProduct } = useAddProduct();
  const { mutate: updateProduct } = useUpdateProduct();
  const [previewImg, setPreviewImg] = useState('');

  useEffect(() => {
    if (type === 'update' && data !== undefined) {
      setPreviewImg(data.image);
      setValue('product_name', data.product_name);
      setValue('price', data.price);
      setValue('shipping_method', data.shipping_method);
      setValue('shipping_fee', data.shipping_fee);
      setValue('stock', data.stock);
      setValue('product_info', data.product_info);
    }
  }, [type, data]);

  const handleImage = (e: SyntheticEvent) => {
    if (e.target instanceof HTMLInputElement && e.target.files !== null) {
      setValue('image', e.target.files[0]);
      setPreviewImg(URL.createObjectURL(e.target.files[0]));
      console.log(e);
      console.log(e.target.files[0]);
      URL.revokeObjectURL(previewImg);
    }
  };

  const onSubmit = async (formData: FieldValues) => {
    if (type === 'create') {
      addProduct(formData, {
        onSuccess: () => {
          navigate('/seller');
        },
      });
    } else {
      updateProduct(
        { submitFormData: formData, id: Number(id) },
        {
          onSuccess: () => {
            navigate('/seller');
          },
        }
      );
    }
  };

  return (
    <Layout title="게시물 작성" size={400}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {previewImg && (
          <img src={previewImg} width={400} height={200} alt={previewImg} />
        )}

        <Controller
          name="image"
          control={control}
          render={({ fieldState: { error } }) => (
            <TextField
              id="file"
              type="file"
              inputProps={{ accept: 'image/*' }}
              variant="outlined"
              fullWidth
              size="small"
              onChange={handleImage}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Controller
          name="product_name"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="상품명"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '상품명을 입력 해주세요.',
          }}
        />
        <Controller
          name="price"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="가격(원)"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '가격을 입력 해주세요.',
            pattern: {
              value: /^[0-9]+$/,
              message: '숫자만 입력 가능합니다.',
            },
          }}
        />
        <Controller
          name="shipping_method"
          control={control}
          defaultValue={'DELIVERY'}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextField
              select
              label="배송방법"
              margin="normal"
              variant="outlined"
              fullWidth
              size="small"
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              SelectProps={{
                native: true,
              }}
            >
              <option key={'DELIVERY'} value={'DELIVERY'}>
                {'직접배송(화물배달)'}
              </option>
              <option key={'PARCEL'} value={'PARCEL'}>
                {'택배,소포,등기'}
              </option>
            </TextField>
          )}
        />
        <Controller
          name="shipping_fee"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="기본배송비"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '배송비를 입력 해주세요.',
            pattern: {
              value: /^[0-9]+$/,
              message: '숫자만 입력 가능합니다.',
            },
          }}
        />
        <Controller
          name="stock"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="재고"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '재고(수량)를 입력 해주세요.',
            pattern: {
              value: /^[0-9]+$/,
              message: '숫자만 입력 가능합니다.',
            },
          }}
        />
        <Controller
          name="product_info"
          control={control}
          defaultValue={''}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="상품설명"
              variant="outlined"
              multiline
              fullWidth
              size="small"
              margin="normal"
              rows={4}
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{
            required: '상품 설명을 입력 해주세요.',
          }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
          }}
        >
          저장
        </Button>
      </form>
    </Layout>
  );
}
