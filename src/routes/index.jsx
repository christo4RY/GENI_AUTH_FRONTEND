import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../pages/App";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Route>
  )
);

export default routes;
