import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
