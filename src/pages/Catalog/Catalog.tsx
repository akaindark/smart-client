import React from "react";
import PromoBanner from "../../components/PromoBanner";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCard from "../../components/ProductCard";

// @ts-ignore
import classes from "./Catalog.module.scss";
import SocialBlock from "../../components/SocialBlock";
import Advantages from "../../components/Advantages";

const Catalog: React.FC = () => {
  return (
    <>
      <main className={classes.content}>
        <PromoBanner />
        <h1 className={classes.title}>Smartphone (988)</h1>
        <div className={classes.filterInner}>
          <button className={classes.filterBtn}>Filtreaza</button>
          <button className={classes.filterBtn}>Ordoneaza dupa</button>
        </div>
        <ul className={classes.list}>
          <li className={classes.item}>
            <a className={classes.link} href="#">
              Text
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="#">
              Text
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href="#">
              Text
            </a>
          </li>
        </ul>

        <ul className={classes.productList}>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
          <li className={classes.productItem}>
            <ProductCard />
          </li>
        </ul>

        <ul className={classes.paginationList}>
          <li className={classes.paginationItem}>
            <a className={classes.paginationLink} href="#">
              1
            </a>
          </li>
          <li className={classes.paginationItem}>
            <a className={classes.paginationLink} href="#">
              2
            </a>
          </li>
          <li className={classes.paginationItem}>
            <a className={classes.paginationLink} href="#">
              3
            </a>
          </li>
          <li className={classes.paginationItem}>
            <a className={classes.paginationLink} href="#">
              4
            </a>
          </li>
          <li className={classes.paginationItem}>
            <a className={classes.paginationLink} href="#">
              5
            </a>
          </li>
          <li>...</li>
          <li className={classes.paginationItem}>
            <a className={classes.paginationLink} href="#">
              17
            </a>
          </li>
        </ul>

        <SocialBlock />
        <Advantages />
      </main>
    </>
  );
};

export default Catalog;
