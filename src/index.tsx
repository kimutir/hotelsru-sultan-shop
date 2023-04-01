import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/app";
import { store } from "./store/store";

const div = document.getElementById("root");
const root = createRoot(div);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
