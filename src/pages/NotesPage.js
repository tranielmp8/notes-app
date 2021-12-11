import React, { useState, useEffect } from "react";
import AddButton from "../components/AddButton";

// import notes from "../assets/data";
import ListItem from "../components/ListItem";

function NotesPage() {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://localhost:5000/notes");
    let data = await response.json();

    setNotes(data);
  };

  console.log();
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782;Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <ListItem key={note.id} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
}

export default NotesPage;
