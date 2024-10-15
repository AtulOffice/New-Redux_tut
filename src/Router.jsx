import { createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import NotePad from "./component/NotePad";
import Contact from "./component/Contact";
import App from "./App";
import Hello from "./component/Hello";
import Pravicy from "./component/Pravicy";
import Home from "./component/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "notepad",
        element: <NotePad />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/PravicyPolicy",
    element: <Pravicy />,
  },
  {
    path: "/helloworld",
    element: <Hello />,
  },
]);
