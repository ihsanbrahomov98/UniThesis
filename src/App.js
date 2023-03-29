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
import AdminDashBoardPage from "./pages/AdminDashBoradAdminsPage/AdminDashBoardAdminsPage";
import AdminDashBoardAdminsPage from "./pages/AdminDashBoradAdminsPage/AdminDashBoardAdminsPage";
import AdminDashBoardUsersPage from "./pages/AdminDashBoardUsersPage/AdminDashBoardUsersPage";
import AdminDashBoardSittersPage from "./pages/AdminDashBoardSittersPage/AdminDashBoardSittersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    // :episode/:ep2:episode/:ep2"
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
  {
    path: "/admindashboard/admins",
    element: <AdminDashBoardAdminsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admindashboard/users",
    element: <AdminDashBoardUsersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admindashboard/sitters",
    element: <AdminDashBoardSittersPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <div>abb</div>
    </>
  );
}

export default App;
