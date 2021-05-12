import React from "react";

import Header from "./header";
import LpFooter from "./lp-footer";
import "../styles/index.scss";
import styles from "./layout.module.scss";

const LpLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <LpFooter />
    </div>
  );
};

export default LpLayout;
