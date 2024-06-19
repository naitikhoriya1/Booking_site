import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Slidebar from "./Components/Slidebar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Slidebar" element={<Slidebar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
