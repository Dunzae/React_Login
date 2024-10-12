import { RouterProvider } from "react-router-dom";
import "normalize.css"
import "./global.css";
import router from "./Router";

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;