import * as React from "react";

const SolutionsGraphic = ({ src, title, alt, header }) => (
  <div className="graphic-headline-container">
    <h2 className="graphic-headline">{header}</h2>

    <img src={src} title={title} alt={alt} className="graphic-creative" />
  </div>
);

export default SolutionsGraphic;
