import Layout from '../../components/common/Layout';
import PaymentList from '../../components/payment/PaymentList';
import { useOrder } from '../../hooks/useOrder';

export default function PaymentForm() {
  const { data } = useOrder();

  return (
    <Layout title="주문리스트">
      {data && <PaymentList paymentData={data} />}
    </Layout>
  );
}
