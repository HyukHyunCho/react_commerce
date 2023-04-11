import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import InfiniteScroll from 'react-infinite-scroller';

interface IPaymentData {
  buyer: number;
  order_number: number;
  receiver: string;
  receiver_phone_number: string;
  address: string;
  address_message: string;
  payment_method: string;
  total_price: number;
}

interface IResults {
  results: IPaymentData[];
}

// interface IPaymentProps {
//   paymentData: IResults[];
//   results: IPaymentData[];
//   fetchNextPage: (page: number) => void;
//   hasNextPage: boolean;
// }

export default function PaymentList({
  paymentData,
  fetchNextPage,
  hasNextPage,
}: any) {
  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>주문번호</TableCell>
            {/* <TableCell>구매자</TableCell> */}
            <TableCell>받는사람</TableCell>
            <TableCell>받는사람 연락처</TableCell>
            <TableCell>배송메시지</TableCell>
            <TableCell>결제방법</TableCell>
            <TableCell align="right">결제금액</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentData &&
            paymentData.pages.map(
              (item: IResults) =>
                item &&
                item.results.map((data: IPaymentData) => (
                  <TableRow key={data.order_number}>
                    <TableCell>{data.order_number}</TableCell>
                    {/* <TableCell>{data.buyer}</TableCell> */}
                    <TableCell>{data.receiver}</TableCell>
                    <TableCell>{data.receiver_phone_number}</TableCell>
                    <TableCell>{data.address_message}</TableCell>
                    <TableCell>
                      {data.payment_method === 'CARD' ? '카드결제' : '무통장'}
                    </TableCell>
                    <TableCell align="right">
                      {data.total_price.toLocaleString('ko-KR')}원
                    </TableCell>
                  </TableRow>
                ))
            )}
        </TableBody>
      </Table>
    </InfiniteScroll>
  );
}
