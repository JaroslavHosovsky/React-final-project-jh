import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Spells from "./pages/Spells";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
