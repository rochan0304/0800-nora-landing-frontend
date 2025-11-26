import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <IndexPage /> }/>
        <Route path="/verify" element={ <ConfirmationPage /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;