import { useLocation } from 'react-router';
import OrderList from '../../components/order/OrderList';
import Layout from '../../components/common/Layout';
import { Button } from '@mui/material';
import OrderInfo from '../../components/order/OrderInfo';

export default function OrderForm() {
  const {
    state: { orderItems, orderCheckItems },
  } = useLocation();

  return (
    <Layout title="주문하기" size={1000}>
      {orderItems && (
        <>
          <OrderList
            orderItems={orderItems}
            orderCheckItems={orderCheckItems}
          />
          <OrderInfo
            orderItems={orderItems}
            orderCheckItems={orderCheckItems}
          />
        </>
      )}

      <Button
        type="button"
        variant="contained"
        fullWidth
        sx={{ mt: 5 }}
        // onClick={onClickOrder}
      >
        주문하기
      </Button>
    </Layout>
  );
}
