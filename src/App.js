import "./App.css";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import SearchPage from "./pages/SearchPage/SearchPage";
import SitterPage from "./pages/SitterPage/SitterPage";
import DogWalkingPage from "./pages/DogWalkingPage/DogWalkingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sitter",
    element: <SitterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/walking",
    element: <DogWalkingPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <div>maiko</div>
    </>
  );
}

export default App;
