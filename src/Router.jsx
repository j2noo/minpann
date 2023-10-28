import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Start from "./pages/Start";

function Router() {
  // const a = 1;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<div>login</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
