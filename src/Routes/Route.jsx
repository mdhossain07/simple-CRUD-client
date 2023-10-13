import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Users from "../components/Users";
import Update from "../components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/update/:id",
    element: <Update />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

export default router;
