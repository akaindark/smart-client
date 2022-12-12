import React from "react";

// @ts-ignore
import classes from "./Content.module.scss";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <main className={classes.content}>{children}</main>;
};

export default Content;
