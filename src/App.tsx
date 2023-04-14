import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/globalStyles";
import { Router } from "./Router";
import { Snackbar } from "./hooks";

function App() {
  return (
    <BrowserRouter>
      <Snackbar.Provider>
        <GlobalStyle />
        <Router />
      </Snackbar.Provider>
    </BrowserRouter>
  );
}

export default App;
