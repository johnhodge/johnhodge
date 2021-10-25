import React from "react";
import * as styles from "./footnotes.module.scss";

const Footnotes = ({ data }) => (
  <div>
    <h2>Resources</h2>
    <ol className={styles.footnoteList}>
      {data.map((note, i) => (
        <li id={i + 1}>
          {note.authorFirstName} {note.authorLastName},
          {`"${note.articleTitle}"`} <em>{note.publicationName}</em>.{" "}
          {note.publicationDate}.{" "}
          <a title={`Link to ${note.articleTitle}.`} href={note.articleUrl}>
            {note.articleUrl}
          </a>
          .
        </li>
      ))}
    </ol>
  </div>
);

export default Footnotes;
