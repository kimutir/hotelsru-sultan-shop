import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/app";
import { setupStore } from "./store/store";

const div = document.getElementById("root");
const root = createRoot(div);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
);
