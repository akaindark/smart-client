import React from "react";

// @ts-ignore
import classes from "./Beadcrumbs.module.scss";

const Breadcrumbs: React.FC = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <a className={classes.link} href="#">
          Telefoane,Tablete si Gadget/
        </a>
      </li>
    </ul>
  );
};

export default Breadcrumbs;
