import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailsView from "./pages/DetailsView";
import ListView from "./pages/ListView";
import RouteNotFound from "./pages/RouteNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { listViewData } from "./pages/ListView";
import { detailsViewData } from "./pages/DetailsView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<RouteNotFound />}>
      <Route index loader={listViewData} element={<ListView />} />
      <Route
        path="/details/:id"
        loader={detailsViewData}
        element={<DetailsView />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
