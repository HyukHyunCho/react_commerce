import { Routes, Route, Outlet } from 'react-router';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Header from './containers/common/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Search from './pages/Search';
import Seller from './pages/Seller';
import SellerRegister from './pages/SellerRegister';
import Payment from './pages/Payment';
import PrivateRoute from './lib/PrivateRoute';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route
          path="cart"
          element={<PrivateRoute restricted={true} component={<Cart />} />}
        />
        <Route
          path="order"
          element={<PrivateRoute restricted={true} component={<Order />} />}
        />
        <Route
          path="seller"
          element={<PrivateRoute restricted={true} component={<Seller />} />}
        />
        <Route
          path="seller/:id"
          element={
            <PrivateRoute restricted={true} component={<SellerRegister />} />
          }
        />
        <Route
          path="payment"
          element={<PrivateRoute restricted={true} component={<Payment />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
