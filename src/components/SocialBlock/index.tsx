import React from "react";

// @ts-ignore
import classes from "./SocialBlock.module.scss";

const SocialBlock: React.FC = () => {
  return (
    <div className={classes.section}>
      <div className={classes.titleBox}>
        <h3 className={classes.title}>Hai sa vorbim!</h3>
        <div className={classes.icon}>
          <img
            src="https://www.smart.md/catalog/view/smartv3/img/__new_chats/Megafon.png"
            alt=""
          />
        </div>
      </div>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <a className={classes.listLink} href="#">
            <img
              src="https://www.smart.md/catalog/view/smartv3/img/__new_chats/Viber.png"
              alt=""
            />
          </a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.listLink} href="#">
            <img
              src="https://www.smart.md/catalog/view/smartv3/img/__new_chats/Viber.png"
              alt=""
            />
          </a>
        </li>
        <li className={classes.listItem}>
          <a className={classes.listLink} href="#">
            <img
              src="https://www.smart.md/catalog/view/smartv3/img/__new_chats/Viber.png"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBlock;
