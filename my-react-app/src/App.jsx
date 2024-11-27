import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Mid from "./pages/mid.jsx";
import Last from "./pages/Last.jsx";
import Timer from "./pages/timer.jsx";
import Navbar from "./navbar.jsx";

function app(){
  return(
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mid" element={<Mid />} />
      <Route path="/Last" element={<Last />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
    </BrowserRouter>
  )
}

export default app;