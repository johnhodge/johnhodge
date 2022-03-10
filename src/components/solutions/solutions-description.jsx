import * as React from "react";
import * as styles from "./solutions-description.module.scss";

const SolutionsDescription = ({ description, benefits }) => (
  <div className={styles.descriptionContainer}>
    <p>{description}</p>
    {benefits ? (
      <ul>
        {benefits.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    ) : (
      ""
    )}
  </div>
);

export default SolutionsDescription;
