import { Navigate } from 'react-router-dom';
import { isLogin } from './IsLogin';

interface IRouteProps {
  restricted?: boolean;
  component: JSX.Element;
}

export default function PrivateRoute({ component: Component }: IRouteProps) {
  return isLogin() ? Component : <Navigate replace to="/signin" />;
}
