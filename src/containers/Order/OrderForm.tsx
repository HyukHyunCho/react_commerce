import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { Button } from '@mui/material';
import OrderList from '../../components/order/OrderList';

export default function OrderForm() {
  const {
    state: { orderItems, orderCheckItems },
  } = useLocation();

  console.log(orderItems);
  console.log(orderCheckItems);

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          주문하기
        </Typography>
        {orderItems && (
          <OrderList
            orderItems={orderItems}
            orderCheckItems={orderCheckItems}
          />
          // <CartList
          //   cartData={cartData}
          //   cartInfoData={cartQueries}
          //   cartCheckItems={cartCheckItems}
          //   cartItemTotalPrice={cartItemTotalPrice}
          //   cartItemFee={cartItemFee}
          //   cartItemPayPrice={cartItemPayPrice}
          //   selectCart={selectCart}
          //   selectAllCart={selectAllCart}
          //   onClickCartDelete={onClickCartDelete}
          // />
        )}
        <Button
          type="button"
          variant="contained"
          fullWidth
          // onClick={onClickOrder}
        >
          주문하기
        </Button>
      </Box>
    </Container>
  );
}
