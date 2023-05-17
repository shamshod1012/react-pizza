import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Orders } from "./pages";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
