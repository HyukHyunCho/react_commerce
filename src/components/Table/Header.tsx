import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';

export default function Header() {
  return (
    <TableHead>
      <TableRow>
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
  );
}
