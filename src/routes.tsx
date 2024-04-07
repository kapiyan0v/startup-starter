import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import {TestPage} from "./pages/test.tsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/test',
    element: <TestPage />
  }
])