import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Orders, Auth, Login, AddNewPizza } from "./pages";
import { LoginOrAuth } from "./pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/loginorauth",
    element: <LoginOrAuth />,
  },
  {
    path: "addnewpizza",
    element: <AddNewPizza />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
