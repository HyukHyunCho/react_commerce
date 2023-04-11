import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';
import { Button } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroller';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface IResult {
  product_id: number;
  image: string;
  product_name: string;
  price: number;
  stock: number;
  created_at: string;
  product_info: string;
  seller: number;
  shipping_fee: number;
  shipping_method: string;
  store_name: string;
  updated_at: string;
}

interface IFormValue {
  results: IResult[];
}

export default function SellerList({
  sellerData,
  onClickUpdateProduct,
  onClickDeleteProduct,
  fetchNextPage,
  hasNextPage,
}: any) {
  return (
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      <Table>
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
            sellerData.pages.map(
              (item: IFormValue) =>
                item &&
                item.results.map((data: IResult) => (
                  <TableRow key={data.product_id}>
                    <TableCell>
                      <img
                        src={data.image}
                        alt={data.image}
                        style={{ width: '90px', height: '90px' }}
                      />
                    </TableCell>
                    <TableCell>{data.product_name}</TableCell>
                    <TableCell>{data.price}원</TableCell>
                    <TableCell>{data.stock}개</TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="contained"
                        disableElevation={true}
                        sx={{
                          color: '#000',
                          border: '1px solid #d4d4d4',
                          '&:hover': {
                            backgroundColor: '#EAEAEA',
                          },
                          backgroundColor: '#fff',
                        }}
                        onClick={() => onClickUpdateProduct(data.product_id)}
                      >
                        수정
                      </Button>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => onClickDeleteProduct(data.product_id)}
                      >
                        <HighlightOffIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
            )}
        </TableBody>
      </Table>
    </InfiniteScroll>
  );
}
