/* configuração da main react */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './pages/App.jsx';
import Feed from './pages/Feed.jsx';
import SignUp from "./pages/SignUp.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Feed/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
