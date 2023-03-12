import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./assets/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Products/Products";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsProvider>
    </Provider>
  </React.StrictMode>
);
