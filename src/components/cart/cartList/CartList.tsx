import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import { Button, Checkbox } from '@mui/material';

interface ICartItem {
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CartList({
  cartData,
  cartInfoData,
  cartCheckItems,
  cartItemTotalPrice,
  cartItemFee,
  cartItemPayPrice,
  selectCart,
  selectAllCart,
  onClickCartDelete,
}: any) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox {...label} onChange={(e) => selectAllCart(e)} />
            </TableCell>
            <TableCell>상품이미지</TableCell>
            <TableCell>판매처</TableCell>
            <TableCell>상품명</TableCell>
            <TableCell>배송방법</TableCell>
            <TableCell>배송비</TableCell>
            <TableCell>수량</TableCell>
            <TableCell>판매금액</TableCell>
            <TableCell>총 금액</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartInfoData &&
            cartInfoData.map(
              (item: any, idx: number) =>
                item.data && (
                  <TableRow key={item.data.product_id}>
                    <TableCell>
                      <Checkbox
                        {...label}
                        checked={
                          cartCheckItems.includes(item.data) ? true : false
                        }
                        onChange={(e) => selectCart(e, item.data)}
                      />
                    </TableCell>
                    <TableCell>
                      <img
                        src={item.data.image}
                        alt={item.data.image}
                        style={{ width: '90px', height: '90px' }}
                      />
                    </TableCell>
                    <TableCell>{item.data.store_name}</TableCell>
                    <TableCell>{item.data.product_name}</TableCell>
                    <TableCell>
                      {item.data.shipping_method === 'PARCEL'
                        ? '택배배송'
                        : '직접배송(화물배달)'}
                    </TableCell>
                    <TableCell>
                      {item.data.shipping_fee.toLocaleString('ko-KR')}원
                    </TableCell>
                    <TableCell>
                      {item.data.product_id === cartData[idx].product_id &&
                        cartData[idx].quantity}
                      개
                    </TableCell>
                    <TableCell>
                      {item.data.price.toLocaleString('ko-KR')}원
                    </TableCell>
                    <TableCell>
                      {(
                        item.data.product_id === cartData[idx].product_id &&
                        cartData[idx].quantity * item.data.price
                      ).toLocaleString('ko-KR')}
                      원
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="contained"
                        color="error"
                        onClick={() => onClickCartDelete(item.data.product_id)}
                      >
                        삭제
                      </Button>
                    </TableCell>
                  </TableRow>
                )
            )}
        </TableBody>
      </Table>
      <Table sx={{ marginTop: 10 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">총상품 금액</TableCell>
            <TableCell align="center"></TableCell>

            <TableCell align="center">배송비</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">총 결제 금액</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              {cartItemTotalPrice.toLocaleString('ko-KR')}원
            </TableCell>
            <TableCell align="center">+</TableCell>

            <TableCell align="center">
              {cartItemFee.toLocaleString('ko-KR')}원
            </TableCell>
            <TableCell align="center">=</TableCell>
            <TableCell
              align="center"
              sx={{ color: '#ff0000', fontSize: '24px', fontWeight: 'bold' }}
            >
              {cartItemPayPrice.toLocaleString('ko-KR')}원
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
