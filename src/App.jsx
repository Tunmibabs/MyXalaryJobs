// import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss";
import AppliedJobs from "./pages/appliedJobs";
import LoggedInPage from "./pages/loggedInPage";
import Jobs from "./pages/Jobs";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Offerspage from "./pages/offerspage";
import Applayout from "./Layout/Applayout";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/pageNotFound";
import AuthProvider from "./Context/AuthContext";
import JobLayout from "./Layout/jobLayout";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        element: <JobLayout />,
        children: [
          {
            path: "/",
            element: <Navigate to='/jobs' />,
            // errorElement: <div>404 not Found</div>,
          },
          {
            path: "jobs",
            element: <Jobs />,
            children: [
              {
                path: ":jobIndex",
                element: <Jobs />,
              },
            ],
          },

          {
            path: "/appliedJobs",
            element: <AppliedJobs />,
            children: [
              {
                path: ":jobId",
                element: <AppliedJobs />,
              },
            ],
          },

          {
            path: "/offers",
            element: <Offerspage />,
            children: [
              {
                path: ":jobId",
                element: <Offerspage />,
              },
            ],
          },
        ],
      },

      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/logged",
        element: <LoggedInPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
