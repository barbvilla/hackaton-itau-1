import Login from "./Views/Login";
import Welcome from "./Views/Welcome";
import Chatbot from "./Views/Chatbot";
/* 
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/chatbot" element={<Chatbot />} />
        {/* <Route path="/verification" element={<Verification />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
