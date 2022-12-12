import React from "react";

// @ts-ignore
import classes from "./PromoBanner.module.scss";

const PromoBanner: React.FC = () => {
  return (
    <div className={classes.banner}>
      <a className={classes.link} href="#">
        <img src="./assets/images/promo-banner.jpg" alt="" />
      </a>
    </div>
  );
};

export default PromoBanner;
