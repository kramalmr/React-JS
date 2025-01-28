import { ProductList, ProductDetail, ProfileDetail } from "./Home";
import LoginPage from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/profile", element: <ProfileDetail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
