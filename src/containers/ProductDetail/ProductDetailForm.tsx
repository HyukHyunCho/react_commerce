import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ProductDetail from '../../components/product/productDetail';
import { useProductDetail } from '../../hooks/useProductDetail';
import { useAddCart, useCart } from '../../hooks/useCart';
import { getUserType } from '../../util/cookie';
import Modal from '../../components/modal';
import Layout from '../../components/common/Layout';
import { useShoppingCartCheck } from '../../hooks/useCartCheck';
import { useAddOrder } from '../../hooks/useOrder';

interface ICartItem {
  cart_item_id: number;
  is_active: boolean;
  my_cart: number;
  product_id: number;
  quantity: number;
}

export default function ProductDetailForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userType] = useState(getUserType());
  const [open, setOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSubTitle, setModalSubTitle] = useState('');
  const [count, setCount] = useState(1);
  const { data: productDetailData } = useProductDetail(Number(id));
  const { data: cartCheckData } = useShoppingCartCheck();
  const { data: cartData, cartQueries } = useCart();
  const { mutate: addCart } = useAddCart();
  const { mutate: addPayment } = useAddOrder();

  const handleClose = () => {
    setOpen(false);
  };

  const onCountClick = (value: string) => {
    if (value === 'plus') {
      if (productDetailData.stock <= count) return;
      setCount(count + 1);
    } else {
      if (count < 2) return;
      setCount(count - 1);
    }
  };

  const cartCheck = () => {
    if (!userType) {
      alert('로그인이 필요한 서비스입니다.');
      return false;
    }
    if (userType === 'SELLER') {
      alert('판매자는 구매할 수 없습니다.');
      return false;
    }

    const shoppingCartData = cartCheckData.find(
      (item: ICartItem) => item.product_id === productDetailData.product_id
    );
    const shoppingCartCheck = shoppingCartData === undefined ? true : false;

    if (shoppingCartCheck === false) {
      setModalTitle('장바구니에 있는 제품입니다.');
      setModalSubTitle('장바구니로 이동하시겠습니까?');
      setOpen(true);
      return false;
    }
    return true;
  };

  const onClickOrder = () => {
    const check = cartCheck();

    if (!check) return;

    navigate('/order/', {
      state: {
        orderItems: [
          { product_id: productDetailData.product_id, quantity: count },
        ],
        orderCheckItems: [productDetailData],
        cartItemTotalPrice: productDetailData.price * count,
        cartItemFee: productDetailData.shipping_fee,
        orderType: 'direct_order',
      },
    });
  };

  const onClickAddCart = () => {
    const check = cartCheck();

    if (!check) return;

    const req = {
      product_id: productDetailData.product_id,
      quantity: count,
      check: true,
    };
    addCart(req, {
      onSuccess: (res) => {
        setModalTitle('상품이 장바구니에 추가 되었습니다.');
        setModalSubTitle('장바구니로 이동하시겠습니까?');
        setOpen(true);
      },
    });
  };

  const onClickCartMove = () => {
    navigate('/cart');
  };

  return (
    <Layout title="상품 상세" size={1000}>
      <ProductDetail
        productDetailData={productDetailData}
        count={count}
        onCountClick={onCountClick}
        onClickOrder={onClickOrder}
        onClickAddCart={onClickAddCart}
      />
      {open && (
        <Modal
          open={open}
          handleClose={handleClose}
          title={modalTitle}
          subTitle={modalSubTitle}
        />
      )}
    </Layout>
  );
}
