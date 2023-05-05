import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/Routes";
import { Provider } from "react-redux/es/exports";
import { Store } from "./Global/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persiststore = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persiststore}>
        <RouterProvider router={element} />
      </PersistGate>
    </Provider>

    {/* <App /> */}
  </React.StrictMode>
);
