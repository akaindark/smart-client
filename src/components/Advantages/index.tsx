import React from "react";
// @ts-ignore
import classes from "./Advantages.module.scss";

const Advantages: React.FC = () => {
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>De ce la noi e mai ieftin?</h3>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <h4 className={classes.listTitle}>Nu platim chirii scumpe</h4>
          <p className={classes.listText}>pe strazi centrale si mall-uri.</p>
        </li>
        <li className={classes.listItem}>
          <h4 className={classes.listTitle}>
            Nu investim in publicitate scump
          </h4>
          <p className={classes.listText}>pe TV, radio si panouri stradale.</p>
        </li>
        <li className={classes.listItem}>
          <h4 className={classes.listTitle}>
            Importam direct de la distribuitori
          </h4>
          <p className={classes.listText}>din Europa si Asia.</p>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
