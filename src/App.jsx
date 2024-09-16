import "./app.scss";
import AppliedJobs from "./Layout/appliedJobs";
import LoggedInPage from "./Layout/loggedInPage";
import MainLayout from "./Layout/mainLayout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
  }
]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
