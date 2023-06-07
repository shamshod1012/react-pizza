import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Orders, Auth, Login, LoginOrAuth } from "./pages";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
