import { Grid, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export default function OrderInfo({
  orderItems,
  orderCheckItems,
  cartItemFee,
  cartItemTotalPrice,
  children,
}: any) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">주문자 정보</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="user_name"
            label="이름"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="phone_number"
            label="휴대폰"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField name="email" label="이메일" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">배송지 정보</Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          {children}
        </Grid>
        <Grid item xs={12} sm={5}>
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  title={'최종결제 정보'}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    color: '#fff',
                    backgroundColor: () => '#1565c0',
                  }}
                />
                <CardContent>
                  <Typography variant="subtitle1" align="center">
                    {`상품금액: ${cartItemTotalPrice.toLocaleString(
                      'ko-KR'
                    )}원`}
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    {'할인금액: 0 원'}
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    {`배송비: ${cartItemFee.toLocaleString('ko-KR')}원`}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mt: 5,
                      mb: 2,
                    }}
                  >
                    <Typography variant="h5" align="center">
                      {'최종결제 금액: '}
                    </Typography>
                    <Typography variant="h4" color="error">
                      {orderCheckItems
                        .map(
                          (
                            el: { price: number; shipping_fee: number },
                            idx: string | number
                          ) =>
                            el.price * orderItems[idx].quantity +
                            el.shipping_fee
                        )
                        .reduce((prev: any, curr: any) => {
                          return prev + curr;
                        }, 0)
                        .toLocaleString('ko-KR')}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /원
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
