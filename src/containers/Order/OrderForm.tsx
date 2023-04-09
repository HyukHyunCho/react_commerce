import { useLocation } from 'react-router';
import OrderList from '../../components/order/OrderList';
import Layout from '../../components/common/Layout';
import OrderInfoForm from './OrderInfoForm';

export default function OrderForm() {
  const {
    state: {
      orderItems,
      orderCheckItems,
      cartItemTotalPrice,
      cartItemFee,
      orderType,
    },
  } = useLocation();

  return (
    <Layout title="주문하기">
      {orderItems && (
        <>
          <OrderList
            orderItems={orderItems}
            orderCheckItems={orderCheckItems}
          />
          <OrderInfoForm
            orderItems={orderItems}
            orderCheckItems={orderCheckItems}
            cartItemTotalPrice={cartItemTotalPrice}
            cartItemFee={cartItemFee}
            orderType={orderType}
          />
        </>
      )}
    </Layout>
  );
}
