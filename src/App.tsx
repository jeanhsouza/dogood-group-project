import { GlobalStyled } from "./styles/globalStyle";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Routes />
    </div>
  );
}

export default App;
