import React, { useContext, useState } from "react";
// @ts-ignore
import classes from "./Header.module.scss";
import Menu from "../Menu";
import { Context } from "../../index";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  // @ts-ignore
  const { user } = useContext(Context);
  return (
    <header className={classes.header}>
      {showMenu && <Menu />}
      <ul className={classes.headerList}>
        <li className={classes.headerItem}>
          <button className={classes.logo}>
            <img src="assets/images/header/logo.png" alt="logo" />
            <div className={classes.logoText}>
              <span className={classes.textYellow}>Smart</span>
              <span>.md</span>
            </div>
          </button>
        </li>
        <li className={classes.headerItem}>
          <button className={classes.headerSearch}>
            <img src="assets/images/header/search-icon.png" alt="search" />
            <span className={classes.smallTextMenu}>Cauta</span>
          </button>
        </li>
        <li className={classes.headerItem}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={classes.menuBtn}
          >
            <span className={classes.menuIcon}></span>
            <span className={classes.menuIcon}></span>
            <span className={classes.menuIcon}></span>
            <span className={classes.smallTextMenu}>Meniu</span>
          </button>
        </li>
        {user.isAuth ? (
          <li className={classes.headerItem}>
            <button>Administrare</button>
            <button>Logare</button>
          </li>
        ) : (
          <li className={classes.headerItem}>
            <button
              onClick={() => user.setIsAuth(true)}
              className={classes.logo}
            >
              Autorizare
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
