import "./App.css";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import SearchPage from "./pages/SearchPage/SearchPage";
import SitterPage from "./pages/SitterPage/SitterPage";
import DogWalkingPage from "./pages/DogWalkingPage/DogWalkingPage";
import DogSittingPage from "./pages/DogSittingPage/DogSittingPage";
import DogBoardingPage from "./pages/DogBoradingPage/DogBoardingPage";
import DogVetExaminingPage from "./pages/DogVetExaminingPage/DogVetExaminingPage";

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
  {
    path: "/sitting",
    element: <DogSittingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/boarding",
    element: <DogBoardingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/training",
    element: <DogBoardingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examining",
    element: <DogVetExaminingPage />,
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
