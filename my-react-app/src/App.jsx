import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Last from "./pages/Last.jsx";
import timer from "./pages/timer.jsx";
import Navbar from "./navbar.jsx";

function app(){
  return(
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Last" element={<Last />} />
      <Route path="/timer" element={<timer />} />
    </Routes>
    </BrowserRouter>
  )
}

export default app;