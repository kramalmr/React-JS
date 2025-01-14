import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, AboutPage, NotFoundPage, Dashboard, Settings, ProfilePage, Profile } from "./Components.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFoundPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/settings", element: <Settings /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/:userId", element: <ProfilePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

