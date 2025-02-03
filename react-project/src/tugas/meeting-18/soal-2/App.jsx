import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { CreateProduct, ProductList } from "./Components";
import Update from "./Update";


const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/create", element: <CreateProduct /> },
    { path: "/list", element: <ProductList /> },
    { path: "/update/:id", element: <Update /> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}