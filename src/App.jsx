import { BrowserRouter } from "react-router-dom";
import Views from "./Views/Views";
const App = () => {
  return (
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  );
};

export default App;
