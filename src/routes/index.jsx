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
import RouteAuthGuard from "../components/auth/Guard/RouteAuthGuard";
import RouteGuestGuard from "../components/auth/Guard/RouteGuestGuard";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} >
        <Route path="/register" element={<RouteGuestGuard>
          <Register />
        </RouteGuestGuard>} />
        <Route path="/login" element={<RouteGuestGuard>
          <Login />
        </RouteGuestGuard>
        } />
        <Route path="/verify" element={<RouteGuestGuard>
          <AuthVerify />
        </RouteGuestGuard>} />
        <Route path="/admin" element={<RouteAuthGuard>
          <AuthenticateLayout />
        </RouteAuthGuard>}>
          <Route path="products" element={<Products />} />
          <Route path="auth-code" element={<AuthCode />} />
        </Route>
      </Route>
    </Route>
  )
);

export default routes;
