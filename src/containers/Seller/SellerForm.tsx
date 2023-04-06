import Layout from '../../components/common/Layout';
import { useDeleteProduct, useSellerProduct } from '../../hooks/useSeller';
import SellerList from '../../components/seller/SellerList';
import { useNavigate } from 'react-router';
import { Button, Typography } from '@mui/material';

export default function SellerForm() {
  const navigate = useNavigate();
  const { data } = useSellerProduct();
  const { mutate } = useDeleteProduct();

  const onClickDeleteProduct = (id: number) => {
    mutate(id, {
      onSuccess: (res) => {},
    });
  };

  const onClickCreateProduct = () => {
    navigate('/seller/create', {
      state: { type: 'create' },
    });
  };

  const onClickUpdateProduct = (id: number) => {
    console.log(id);
    navigate(`/seller/${id}`, {
      state: { type: 'update' },
    });
  };
  console.log();
  return (
    <Layout title="게시물 리스트" size={1000}>
      <Button
        type="button"
        variant="contained"
        fullWidth
        onClick={onClickCreateProduct}
      >
        게시물 작성
      </Button>
      {data && data.length !== 0 ? (
        <SellerList
          sellerData={data}
          onClickCreateProduct={onClickCreateProduct}
          onClickUpdateProduct={onClickUpdateProduct}
          onClickDeleteProduct={onClickDeleteProduct}
        />
      ) : (
        <Typography component="h1" variant="h5">
          업로드한 게시물이 없습니다.
        </Typography>
      )}
    </Layout>
  );
}
