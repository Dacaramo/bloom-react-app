import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import RegisteredPeoplePage from "./pages/RegisteredPeoplePage";
import ErrorPage from "./pages/ErrorPage";

function App() {

  useEffect(() => {
    document.title = "Bloom Crowdfunding";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/people" element={<RegisteredPeoplePage />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
