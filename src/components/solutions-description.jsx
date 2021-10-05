import * as React from "react";
import * as styles from "./solutions-description.module.scss";

const SolutionsDescription = ({ description, benefits }) => (
  <div className={styles.descriptionContainer}>
    <p>{description}</p>
    {console.log(benefits)}
    {benefits ? (
      <ul className={styles.solutionItems}>
        {benefits.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    ) : (
      ""
    )}
  </div>
);

export default SolutionsDescription;
