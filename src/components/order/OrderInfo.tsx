import { Button, Grid, TextField, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export default function OrderInfo({ orderItems, orderCheckItems }: any) {
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
            required
            id="firstName"
            name="firstName"
            label="이름"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="휴대폰"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="address1"
            name="address1"
            label="이메일"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">배송지 정보</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="address2"
            name="address2"
            label="수령인"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="휴대폰"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="state"
            name="state"
            label="배송주소"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zip"
            name="zip"
            label="배송 메시지"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              결제수단
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="신용/체크카드"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="무통장입금"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
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
                  {/* <Typography variant="subtitle1" align="center">
                    {'상품금액'}
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    {'할인금액: 0 원'}
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    {'배송비'}
                  </Typography> */}

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography variant="subtitle1" align="center">
                      {'최종결제 금액'}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="error">
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
