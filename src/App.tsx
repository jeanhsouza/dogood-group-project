import { GlobalStyled } from "./styles/globalStyle";
import { ToastContainer} from "react-toastify";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <ToastContainer/>
      <Routes />
    </div>
  );
}

export default App;
