import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import { isLogin } from './IsLogin';

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}: any) {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props: JSX.IntrinsicAttributes) =>
        isLogin() && restricted ? (
          <Navigate replace to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
