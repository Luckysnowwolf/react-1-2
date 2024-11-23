import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Last from "./pages/Last.jsx";
import Navbar from "./navbar.jsx";

function app(){
  return(
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Last" element={<Last />} />
    </Routes>
    </BrowserRouter>
  )
}

export default app;