import { Grid, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import OrderInfo from '../../components/order/OrderInfo';
import { useAddOrder } from '../../hooks/useOrder';
import Alerts from '../../components/alert';
import { useNavigate } from 'react-router';

export default function OrderInfoForm({
  orderItems,
  orderCheckItems,
  cartItemTotalPrice,
  cartItemFee,
  orderType,
}: any) {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { mutate, isSuccess } = useAddOrder();

  const onSubmit = async (formData: FieldValues) => {
    const totalPrice = orderCheckItems
      .map(
        (el: { price: number; shipping_fee: number }, idx: string | number) =>
          el.price * orderItems[idx].quantity + el.shipping_fee
      )
      .reduce((prev: any, curr: any) => {
        return prev + curr;
      }, 0);

    if (orderType === 'direct_order') {
      formData.product_id = orderItems[0].product_id;
      formData.quantity = orderItems[0].quantity;
    }

    formData.total_price = totalPrice;
    formData.order_kind = orderType;

    mutate(formData, {
      onSuccess: (res) => {
        navigate('/payment');
      },
    });
  };

  return (
    <OrderInfo
      orderItems={orderItems}
      orderCheckItems={orderCheckItems}
      cartItemFee={cartItemFee}
      cartItemTotalPrice={cartItemTotalPrice}
    >
      {isSuccess && (
        <Alerts severity={'success'} message={'주문을 완료 하였습니다.'} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="receiver"
              control={control}
              defaultValue={''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="수령인 *"
                  fullWidth
                  variant="standard"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: '수령인을 입력 해주세요.',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="receiver_phone_number"
              control={control}
              defaultValue={''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="휴대폰 *"
                  fullWidth
                  variant="standard"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: '휴대폰 번호를 입력하세요.',
                pattern: {
                  value: /^01([0|1|6|7|8|9])/,
                  message: '휴대폰 형식을 입력하세요 (-를 제외한 숫자만).',
                },
                minLength: {
                  value: 8,
                  message: '휴대폰 번호는 10자 이상 입력 해주세요.',
                },
                maxLength: {
                  value: 11,
                  message: '휴대폰 번호는 11자 이하 입력 해주세요.',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="address"
              control={control}
              defaultValue={''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="배송주소 *"
                  fullWidth
                  variant="standard"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: '배송주소를 입력 해주세요.',
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="address_message"
              control={control}
              defaultValue={''}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="배송 메시지 *"
                  fullWidth
                  variant="standard"
                  value={value}
                  autoComplete="집 앞에 놓아주세요."
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: '배송주소를 입력 해주세요.',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Controller
              name="payment_method"
              control={control}
              defaultValue={'CARD'}
              render={({ field: { onChange } }) => (
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    결제수단
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="CARD"
                  >
                    <FormControlLabel
                      control={<Radio onChange={onChange} value={'CARD'} />}
                      label="신용/체크카드"
                    />
                    <FormControlLabel
                      control={<Radio onChange={onChange} value={'DEPOSIT'} />}
                      label="무통장입금"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            '&:hover': {
              backgroundColor: '#4C4C4C',
            },
            backgroundColor: '#000',
          }}
          // onClick={onClickOrder}
        >
          주문하기
        </Button>
      </form>
    </OrderInfo>
  );
}
