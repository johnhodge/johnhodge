import * as React from "react";

const SolutionsGraphic = ({ src, title, alt, height, width, header }) => (
  <div className="graphic-headline-container">
    <h2 className="graphic-headline">{header}</h2>

    <img
      src={src}
      title={title}
      alt={alt}
      height={`${height}px`}
      width={`${width}px`}
      className="graphic-creative"
    />
  </div>
);

export default SolutionsGraphic;
