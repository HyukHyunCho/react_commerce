import { Routes, Route, Outlet } from 'react-router';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Header from './containers/common/Header';
import Footer from './containers/common/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Search from './pages/Search';
import Seller from './pages/Seller';
import SellerRegister from './pages/SellerRegister';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
        <Route path="seller" element={<Seller />} />
        <Route path="seller/:id" element={<SellerRegister />} />
      </Route>
    </Routes>
  );
}

export default App;
