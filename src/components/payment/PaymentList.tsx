import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';

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

interface IPaymentProps {
  paymentData: IPaymentData[];
}

export default function PaymentList({ paymentData }: IPaymentProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>주문번호</TableCell>
          <TableCell>구매자</TableCell>
          <TableCell>받는사람</TableCell>
          <TableCell>받는사람 연락처</TableCell>
          <TableCell>배송메시지</TableCell>
          <TableCell>결제방법</TableCell>
          <TableCell>결제금액</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {paymentData &&
          paymentData.map((item: IPaymentData) => (
            <TableRow key={item.order_number}>
              <TableCell>{item.order_number}</TableCell>
              <TableCell>{item.buyer}</TableCell>
              <TableCell>{item.receiver}</TableCell>
              <TableCell>{item.receiver_phone_number}</TableCell>
              <TableCell>{item.address_message}</TableCell>
              <TableCell>
                {item.payment_method === 'CARD' ? '카드결제' : '무통장'}
              </TableCell>
              <TableCell>
                {item.total_price.toLocaleString('ko-KR')}원
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
