import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ReadNotes from "./components/ReadNotes";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState("all");

  const fetchAllNotes = async () => {
    await axios
      .get("https://hemamalini-noteapp.onrender.com/api/notes/")
      .then((response) => setNotes(response.data));
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/readNotes" style={{ paddingLeft: 15 }}>
          Read Notes
        </Link> 
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/readNotes"
          element={
            <ReadNotes
              notes={notes}
              showStatus={showStatus}
              setShowStatus={setShowStatus}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;