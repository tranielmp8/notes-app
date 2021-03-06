import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ note }) {
  const getTime = (note) => {
    return new Date(note.updated).toLocaleDateString;
  };

  const getContent = (note) => {
    //Get content after title will need to have to subtract from getTitle
    let title = getTitle(note);
    let content = note.body.replaceAll("\n", "");
    content = content.replaceAll(title, "");

    if (content.length > 45) {
      return content.slice(0, 45) + "...";
    } else {
      return content;
    }
  };
  let getTitle = (note) => {
    //split by new lines and just get the first line
    //split will make a list of each line and will only pull the first line
    const title = note.body.split("\n")[0];
    if (title.length > 45) {
      return title.slice(0, 45);
    }
    return title;
  };

  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note.updated)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
}
