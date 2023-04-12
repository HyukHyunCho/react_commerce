import Layout from '../../components/common/Layout';
import PaymentList from '../../components/payment/PaymentList';
import { useOrder } from '../../hooks/useOrder';
import Spinner from '../../components/spinner';

export default function PaymentForm() {
  const { data, fetchNextPage, hasNextPage, isLoading } = useOrder();

  return (
    <Layout title="주문리스트">
      {isLoading && <Spinner />}
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
