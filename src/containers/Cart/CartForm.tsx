import React, { useState } from 'react';
import CartList from '../../components/cart/cartList/CartList';
import { useCart, useCartQueries, useDeleteCart } from '../../hooks/useCart';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

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

export default function CartForm() {
  const navigate = useNavigate();
  const { data: cartData } = useCart();
  const cartQueries = useCartQueries();
  const { mutate } = useDeleteCart();
  const [cartCheckItems, setCartCheckItems] = useState<ICartItem[]>([]);
  const [cartItemTotalPrice, setCartItemTotalPrice] = useState(0);
  const [cartItemFee, setCartItemFee] = useState(0);
  const [cartItemPayPrice, setCartItemPayPrice] = useState(0);
  //const isSuccess = cartQueries.every((info) => info.status === 'success');

  const onClickOrder = () => {
    if (cartCheckItems.length === 0) {
      return alert('주문할 상품을 선택하세요.');
    }

    navigate('/order/', {
      state: {
        orderItems: cartData,
        orderCheckItems: cartCheckItems,
      },
    });
  };

  const onClickCartDelete = (productId: number) => {
    const arr = cartData.filter(
      (item: { product_id: number }) => item.product_id === productId
    );
    mutate(arr[0].cart_item_id, {
      onSuccess: (res) => {
        console.log(res);
        console.log(cartData);
      },
    });
  };

  const cartTotalInfo = (
    totalPrice: number,
    shippingFee: number,
    payPrice: number,
    type: string
  ) => {
    if (type === 'all') {
      setCartItemTotalPrice((prev) => prev + totalPrice);
      setCartItemFee((prev) => prev + shippingFee);
      setCartItemPayPrice((prev) => prev + payPrice);
    } else if (type === 'plus') {
      setCartItemTotalPrice((prev) => prev + totalPrice);
      setCartItemFee((prev) => prev + shippingFee);
      setCartItemPayPrice((prev) => prev + payPrice);
    } else if (type === 'minus') {
      setCartItemTotalPrice((prev) => prev - totalPrice);
      setCartItemFee((prev) => prev - shippingFee);
      setCartItemPayPrice((prev) => prev - payPrice);
    } else if (type === 'reset') {
      setCartItemTotalPrice(0);
      setCartItemFee(0);
      setCartItemPayPrice(0);
    }
  };

  const selectAllCart = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const checkedArr: ICartItem[] = [];
      cartQueries.map((item: any) => checkedArr.push(item.data));

      cartTotalInfo(0, 0, 0, 'reset');

      for (let i = 0; i < cartData.length; i++) {
        for (let j = 0; j < checkedArr.length; j++) {
          if (cartData[i].product_id === checkedArr[j].product_id) {
            const totalPrice = checkedArr[j].price * cartData[i].quantity;
            const shippingFee = checkedArr[j].shipping_fee;
            const payPrice =
              checkedArr[j].price * cartData[i].quantity +
              checkedArr[j].shipping_fee;
            cartTotalInfo(totalPrice, shippingFee, payPrice, 'all');
          }
        }
      }

      setCartCheckItems([...checkedArr]);
    } else {
      cartTotalInfo(0, 0, 0, 'reset');
      setCartCheckItems([]);
    }
  };

  const selectCart = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: ICartItem
  ) => {
    const checkData = cartData.find(
      (item: { product_id: number }) => item.product_id === data.product_id
    );

    const totalPrice = data.price * checkData.quantity;
    const shippingFee = data.shipping_fee;
    const payPrice = data.price * checkData.quantity + data.shipping_fee;

    if (event.target.checked) {
      cartTotalInfo(totalPrice, shippingFee, payPrice, 'plus');
      setCartCheckItems((prev) => [...prev, data]);
    } else {
      cartTotalInfo(totalPrice, shippingFee, payPrice, 'minus');
      setCartCheckItems(
        cartCheckItems.filter((el) => el.product_id !== data.product_id)
      );
    }
  };

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
          장바구니
        </Typography>
        {cartData && (
          <CartList
            cartData={cartData}
            cartInfoData={cartQueries}
            cartCheckItems={cartCheckItems}
            cartItemTotalPrice={cartItemTotalPrice}
            cartItemFee={cartItemFee}
            cartItemPayPrice={cartItemPayPrice}
            selectCart={selectCart}
            selectAllCart={selectAllCart}
            onClickCartDelete={onClickCartDelete}
          />
        )}
        <Button
          type="button"
          variant="contained"
          fullWidth
          onClick={onClickOrder}
        >
          주문하기
        </Button>
      </Box>
    </Container>
  );
}