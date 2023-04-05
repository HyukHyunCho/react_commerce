import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';

import React from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TableForm() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {/* <TableCell>
            <Checkbox />
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
          <TableCell>삭제</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {queries &&
          props.dehydrateState.queries[0].state.data &&
          queries.map(
            (item, idx) =>
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
                  <TableCell></TableCell>
                  <TableCell>{item.data.store_name}</TableCell>
                  <TableCell>{item.data.product_name}</TableCell>
                  <TableCell>
                    {item.data.shipping_method === 'PARCEL'
                      ? '택배'
                      : '직접배송(화물배달)'}
                  </TableCell>
                  <TableCell>
                    {item.data.shipping_fee.toLocaleString('ko-KR')}원
                  </TableCell>
                  {item.data.product_id ===
                    props.dehydrateState.queries[0].state.data[idx]
                      .product_id && (
                    <TableCell>
                      {props.dehydrateState.queries[0].state.data[idx].quantity}
                      개
                    </TableCell>
                  )}
                  <TableCell>
                    {item.data.price.toLocaleString('ko-KR')}원
                  </TableCell>
                  <TableCell>
                    {(
                      props.dehydrateState.queries[0].state.data[idx].quantity *
                      item.data.price
                    ).toLocaleString('ko-KR')}
                    원
                  </TableCell>
                  <TableCell>
                    <Button type="button" variant="contained" color="error">
                      삭제
                    </Button>
                  </TableCell>
                </TableRow>
              )
          )} */}
      </TableBody>
    </Table>
  );
}
