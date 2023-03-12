import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/Products/Products";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ProductsProvider>
  </React.StrictMode>
);
