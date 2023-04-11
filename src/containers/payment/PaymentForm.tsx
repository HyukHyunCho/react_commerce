import Layout from '../../components/common/Layout';
import PaymentList from '../../components/payment/PaymentList';
import { useOrder } from '../../hooks/useOrder';

export default function PaymentForm() {
  const { data, fetchNextPage, hasNextPage } = useOrder();

  return (
    <Layout title="주문리스트">
      {data !== undefined && data.pages.length > 0 && (
        <PaymentList
          paymentData={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </Layout>
  );
}
