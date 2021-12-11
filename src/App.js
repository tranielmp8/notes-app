import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import Note from "./pages/Note";


//json-server --watch db.json --port 5000
function App() {
  return (
    <Router>
      <div className="container dark ">
        <div className="app">
          <Header />
          <Routes>
            <Route element={<NotesPage />} path="/" exact />
            <Route element={<Note />} path="/note/:id" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
