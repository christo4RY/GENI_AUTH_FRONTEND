import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../pages/App";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import AuthenticateLayout from "../pages/layouts/AuthenticateLayout";
import Projects from "../pages/projects/Projects";
import AuthVerify from "../pages/auth/AuthVerify";
import AuthCode from "../pages/authcodes/AuthCode";
import RouteAuthGuard from "../components/auth/Guard/RouteAuthGuard";
import RouteGuestGuard from "../components/auth/Guard/RouteGuestGuard";
import Index from "../pages/layouts/Index";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} >
        <Route index element={<Index />} />
        <Route path="/register" element={<RouteGuestGuard>
          <Register />
        </RouteGuestGuard>} />
        <Route path="/login" element={<RouteGuestGuard>
          <Login />
        </RouteGuestGuard>
        } />
        <Route path="/forgot-password" element={<RouteGuestGuard>
          <ForgotPassword />
        </RouteGuestGuard>
        } />
          <Route path="/reset-password" element={<RouteGuestGuard>
          <ResetPassword />
        </RouteGuestGuard>
        } />
        <Route path="/verify" element={<RouteGuestGuard>
          <AuthVerify />
        </RouteGuestGuard>} />
        <Route path="/admin" element={<RouteAuthGuard>
          <AuthenticateLayout />
        </RouteAuthGuard>}>
          <Route path="projects" element={<Projects />} />
          <Route path="auth-code" element={<AuthCode />} />
        </Route>
        {/* <Route path="/test" element={<AuthIndex/>}/> */}
      </Route>
    </Route>
  )
);

export default routes;
