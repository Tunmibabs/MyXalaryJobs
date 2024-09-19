import "./app.scss";
import AppliedJobs from "./pages/appliedJobs";
import LoggedInPage from "./pages/loggedInPage";
import Jobs from "./pages/Jobs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offerspage from "./pages/offerspage";
import Applayout from "./Layout/Applayout";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/pageNotFound";
import AuthProvider from "./Context/AuthContext";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/offers",
        element: <Offerspage />,
      },

      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/",
        element: <Jobs />,
        // errorElement: <div>404 not Found</div>,
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
