import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { CreateProduct, ProductList } from "./Components";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/create", element: <CreateProduct /> },
    { path: "/list", element: <ProductList /> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}