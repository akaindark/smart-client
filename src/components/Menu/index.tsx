import React, { useContext } from "react";
// @ts-ignore
import classes from "./Menu.module.scss";
import { Context } from "../../index";

const Menu: React.FC = () => {
  // @ts-ignore
  const { user } = useContext(Context);
  return (
    <div className={classes.menu}>
      <ul className={classes.menuList}>
        <li className={classes.menuItem}>
          Telefoane, Tablete, Gadget
          <span className={classes.arrowIcon}>
            <svg
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </li>
        <li className={classes.menuItem}>
          Telefoane, Tablete, Gadget
          <span className={classes.arrowIcon}>
            <svg
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </li>
        <li className={classes.menuItem}>
          Telefoane, Tablete, Gadget
          <span className={classes.arrowIcon}>
            <svg
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </li>
        <li className={classes.menuItem}>
          Telefoane, Tablete, Gadget
          <span className={classes.arrowIcon}>
            <svg
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
