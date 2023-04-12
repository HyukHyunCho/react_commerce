import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import ProductDetail from '../../components/product/productDetail';
import { useProductDetail } from '../../hooks/useProductDetail';
import { useAddCart } from '../../hooks/useCart';
import { getUserType } from '../../util/cookie';
import Modal from '../../components/modal';
import { useShoppingCartCheck } from '../../hooks/useCartCheck';
import { useModal } from '../../hooks/useModal';
import Spinner from '../../components/spinner';

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
  const { state } = useLocation();
  const [userType] = useState(getUserType());
  const [count, setCount] = useState(1);
  const [successCart, setSuccessCart] = useState(true);
  const { data: productDetailData, isLoading } = useProductDetail(Number(id));
  const { data: cartCheckData } = useShoppingCartCheck();

  const { mutate: addCart } = useAddCart();
  const {
    open,
    modalTitle,
    modalSubTitle,
    modalType,
    handleOpen,
    handleClose,
    setModalType,
    setModalTitle,
    setModalSubTitle,
  } = useModal();

  const onCountClick = (value: string) => {
    if (value === 'plus') {
      if (productDetailData.stock <= count) return;
      setCount(count + 1);
    } else {
      if (count < 2) return;
      setCount(count - 1);
    }
  };

  const modalCheck = (type: string, title: string, subTitle: string) => {
    setModalType(type);
    setModalTitle(title);
    setModalSubTitle(subTitle);
    handleOpen();
  };

  const cartCheck = (type: string) => {
    if (!userType) {
      modalCheck(
        '/signin',
        '로그인이 필요한 서비스 입니다.',
        '로그인 페이지로 이동하시겠습니까?'
      );
      return;
    }

    if (productDetailData.stock === 0) {
      modalCheck('', '해당 상품은 품절 되었습니다.', '');
      return;
    }

    if (userType === 'SELLER') {
      modalCheck('', '판매자는 구매 불가능합니다.', '');
      return;
    }

    if (!successCart) {
      return modalCheck(
        '/cart',
        '장바구니에 있는 상품입니다.',
        '장바구니 페이지로 이동하시겠습니까?'
      );
    }

    const shoppingCartData = cartCheckData.find(
      (item: ICartItem) => item.product_id === productDetailData.product_id
    );
    const shoppingCartCheck = shoppingCartData === undefined ? true : false;

    if (shoppingCartCheck === false) {
      modalCheck(
        '/cart',
        '장바구니에 있는 상품입니다.',
        '장바구니 페이지로 이동하시겠습니까?'
      );
      return;
    }

    type === 'cart' ? onClickAddCart() : onClickOrder();
  };

  const onClickAddCart = () => {
    const req = {
      product_id: productDetailData.product_id,
      quantity: count,
      check: true,
    };
    addCart(req, {
      onSuccess: (res) => {
        setSuccessCart(false);
        modalCheck(
          '/cart',
          '상품이 장바구니에 추가 되었습니다.',
          '장바구니로 이동하시겠습니까?'
        );
      },
    });
  };

  const onClickOrder = () => {
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

  const onClickPage = () => {
    navigate(modalType);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <ProductDetail
        productDetailData={state}
        count={count}
        onCountClick={onCountClick}
        cartCheck={cartCheck}
      />
      {open && (
        <Modal
          open={open}
          handleClose={handleClose}
          handleClick={onClickPage}
          title={modalTitle}
          subTitle={modalSubTitle}
          modalType={modalType}
        />
      )}
    </>
  );
}
