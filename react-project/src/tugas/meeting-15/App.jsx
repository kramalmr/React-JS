import { ProductList, ProductDetail } from "./Home";
import LoginPage from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/product/:id", element: <ProductDetail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
