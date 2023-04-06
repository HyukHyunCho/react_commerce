import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import { Button } from '@mui/material';

interface IFormValue {
  created_at: string;
  image: string;
  price: string;
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

export default function SellerList({
  sellerData,
  onClickUpdateProduct,
  onClickDeleteProduct,
}: any) {
  return (
    <>
      <Table sx={{ width: 1000 }}>
        <TableHead>
          <TableRow>
            <TableCell>상품이미지</TableCell>
            <TableCell>상품명</TableCell>
            <TableCell>판매가격</TableCell>
            <TableCell>재고</TableCell>
            <TableCell>수정</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerData &&
            sellerData.map((item: IFormValue) => (
              <TableRow key={item.product_id}>
                <TableCell>
                  <img
                    src={item.image}
                    alt={item.image}
                    style={{ width: '90px', height: '90px' }}
                  />
                </TableCell>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>{item.price}원</TableCell>
                <TableCell>{item.stock}개</TableCell>
                <TableCell>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={() => onClickUpdateProduct(item.product_id)}
                  >
                    수정
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    type="button"
                    variant="contained"
                    color="error"
                    onClick={() => onClickDeleteProduct(item.product_id)}
                  >
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
