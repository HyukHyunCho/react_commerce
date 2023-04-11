import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';

interface IOrderItem {
  created_at: string;
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  shipping_fee: number;
  shipping_method: string;
  stock: number;
  store_name: string;
  updated_at: string;
}

export default function OrderList({ orderItems, orderCheckItems }: any) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>상품이미지</TableCell>
            <TableCell>판매처</TableCell>
            <TableCell>상품명</TableCell>
            <TableCell>배송방법</TableCell>
            <TableCell>배송비</TableCell>
            <TableCell>수량</TableCell>
            <TableCell>주문금액</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderCheckItems &&
            orderCheckItems.map((item: IOrderItem, idx: number) => (
              <TableRow key={item.product_id}>
                <TableCell>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.image}
                      style={{ width: '90px', height: '90px' }}
                    />
                  )}
                </TableCell>
                <TableCell>{item.store_name}</TableCell>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>
                  {item.shipping_method === 'PARCEL'
                    ? '택배'
                    : '직접배송(화물배달)'}
                </TableCell>
                <TableCell>
                  {item.shipping_fee.toLocaleString('ko-KR')}원
                </TableCell>
                {orderItems[idx].product_id === item.product_id && (
                  <TableCell>{orderItems[idx].quantity}개</TableCell>
                )}
                <TableCell>{item.price.toLocaleString('ko-KR')}원</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
