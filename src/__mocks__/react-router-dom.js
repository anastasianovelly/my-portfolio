import React from 'react';

const RouterMock = ({ children }) => <div>{children}</div>;

export const BrowserRouter = RouterMock;
export const Routes = RouterMock;
export const Route = RouterMock;
export const Link = ({ to, children }) => <a href={to}>{children}</a>;
export const useLocation = () => ({
  pathname: '/',
  search: '',
  hash: '',
  state: null
});
export const useNavigate = () => jest.fn();
