import Layout from '../../components/common/Layout';
import { useDeleteProduct, useSellerProduct } from '../../hooks/useSeller';
import SellerList from '../../components/seller/SellerList';
import { useNavigate } from 'react-router';
import { Button, Typography } from '@mui/material';
import Alerts from '../../components/alert';

// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import { useState } from 'react';

export default function SellerForm() {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage } = useSellerProduct();
  const { mutate: deleteProduct, isSuccess } = useDeleteProduct();

  const onClickDeleteProduct = (id: number) => {
    deleteProduct(id, {
      onSuccess: (res) => {},
    });
  };

  const onClickCreateProduct = () => {
    navigate('/seller/create', {
      state: { type: 'create' },
    });
  };

  const onClickUpdateProduct = (id: number) => {
    navigate(`/seller/${id}`, {
      state: { type: 'update' },
    });
  };

  // const [hoverData, setHoverData] = useState(null);
  // const [chartOptions, setChartOptions] = useState({
  //   xAxis: {
  //     categories: ['A', 'B', 'C'],
  //   },
  //   series: [{ data: [1, 2, 3] }],
  //   plotOptions: {
  //     series: {
  //       point: {
  //         events: {
  //           mouseOver(e: any) {
  //             setHoverData(e.target.category);
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  return (
    <Layout title="게시물 리스트" size={1000}>
      {isSuccess && (
        <Alerts severity={'error'} message={'삭제를 완료 하였습니다.'} />
      )}
      <Button
        type="button"
        variant="contained"
        fullWidth
        sx={{
          m: 3,
          '&:hover': {
            backgroundColor: '#4C4C4C',
          },
          backgroundColor: '#000',
        }}
        onClick={onClickCreateProduct}
      >
        게시물 작성
      </Button>
      {data !== undefined && data.pages[0].length !== 0 ? (
        <SellerList
          sellerData={data}
          onClickCreateProduct={onClickCreateProduct}
          onClickUpdateProduct={onClickUpdateProduct}
          onClickDeleteProduct={onClickDeleteProduct}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      ) : (
        <Typography component="h1" variant="h5">
          업로드한 게시물이 없습니다.
        </Typography>
      )}
    </Layout>
  );
}
