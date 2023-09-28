import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../pages/App";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import AuthenticateLayout from "../pages/layouts/AuthenticateLayout";
import Products from "../pages/products/Products";
import AuthVerify from "../pages/auth/AuthVerify";
import AuthCode from "../pages/authcodes/AuthCode";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/verify" element={<AuthVerify/>}/>
      <Route path="/admin" element={<AuthenticateLayout/>}>
        <Route path="products" element={<Products/>}/>
        <Route path="auth-code" element={<AuthCode/>}/>
      </Route>
    </Route>
  )
);

export default routes;
