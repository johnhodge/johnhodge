import * as React from "react";
import * as styles from "./headline-graphic.module.scss";

const HeadlineGraphic = ({ src, title, alt, height, width, header }) => (
  <div className={styles.graphicHeadlineContainer}>
    <img
      src={src}
      title={title}
      alt={alt}
      height={`${height}px`}
      width={`${width}px`}
      className={styles.graphicCreative}
    />
    <h2 className={styles.graphicHeadline}>{header}</h2>
  </div>
);

export default HeadlineGraphic;
