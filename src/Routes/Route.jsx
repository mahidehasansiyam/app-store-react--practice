import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import Root from "../RootPage/Root";
import Error from "../Component/Error";
import AppsPage from "../Pages/AppsPage/AppsPage";
import Installation from "../Pages/InstallationPage/Installation";
import AppDetails from "../Pages/AppsPage/AppDetails";




export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
      {
        path: '/apps',
        Component: AppsPage,
      },
      {
        path: '/installation',
        Component: Installation
      },
      {
        path: '/apps/:id',
        Component: AppDetails,
      }
    ],
  },
  {
    path: '*',
    Component: Error,
  },
]);
