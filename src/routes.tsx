import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import {Login} from "./pages/login";
import {Test1} from "./pages/test1/test1.tsx";
import {Test2} from "./pages/test2/test2.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'test1',
        element: <Test1 />
      },
      {
        path: 'test2',
        element: <Test2 />
      },
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
])