import * as React from "react";
import * as styles from "./solutions-description.module.scss";

const SolutionsDescription = ({ description }) => (
  <div className={styles.descriptionContainer}>
    <p>{description}</p>
  </div>
);

export default SolutionsDescription;
