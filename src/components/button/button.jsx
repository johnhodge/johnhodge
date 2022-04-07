import React from "react";
import * as styles from "./button.module.scss";

const Button = ({ isSubmitting, isValid, buttonClass, buttonText }) => (
  <button
    type="submit"
    disabled={isSubmitting || !isValid}
    className={buttonClass === "" ? "" : styles.primaryFormBtn}
  >
    {buttonText}
  </button>
);

export default Button;