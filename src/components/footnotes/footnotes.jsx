import React from "react";
import * as styles from "./footnotes.module.scss";

const Footnotes = ({ data }) => (
  <div>
    <h2>Resources</h2>
    <ol className={styles.footnoteList}>
      {data.map((note, i) => {
        const date = new Date(note.publicationDate);
        const year = date.getFullYear();
        return (
          <li id={i + 1} key={note.id}>
            {note.authorFirstName} {note.authorLastName},{" "}
            {`"${note.articleTitle}"`} <em>{note.publicationName}</em>. {year}.{" "}
            <a
              title={`Link to ${note.articleTitle}.`}
              href={note.articleUrl}
              key={note.id}
            >
              {note.articleUrl}
            </a>
            .
          </li>
        );
      })}
    </ol>
  </div>
);

export default Footnotes;
