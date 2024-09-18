import "./app.scss";
import AppliedJobs from "./Layout/appliedJobs";
import LoggedInPage from "./Layout/loggedInPage";
import MainLayout from "./Layout/mainLayout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Offerspage from "./Layout/offerspage";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    errorElement: <div>404 not Found</div>
  },
  {
    path: '/logged',
    element: <LoggedInPage />
  },
  {
    path: '/appliedJobs',
    element: <AppliedJobs />
  },
  {
    path: '/jobOffers',
    element: <Offerspage />
  }
]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
