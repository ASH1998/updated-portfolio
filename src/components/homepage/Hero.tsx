import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm <span className={styles.highlighted}>Ashutosh Mishra</span>,
          <br />
          ML Developer.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          Machine Learning engineer interested in AI and tech trends.
          <br /> LLM and open-source enthusiast.
        </p>
      </div>
    </header>
  );
};
