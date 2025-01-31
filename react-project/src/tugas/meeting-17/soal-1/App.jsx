import { ProductList, ProductDetail, ProfileDetail } from "./Home";
import LoginPage from "./Login";
import Help, { CreateUser, ReadUser } from "./Help";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/profile", element: <ProfileDetail /> },
  { path: "/help", element: <Help /> },
  { path: "/help/create", element: <CreateUser /> },
  { path: "/help/read", element: <ReadUser /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
