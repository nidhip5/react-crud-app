import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
        <h2 className="main-header">React CRUD Operation</h2>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
