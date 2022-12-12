import React from "react";

// @ts-ignore
import classes from "./Product.module.scss";
import PromoBanner from "../../components/PromoBanner";
import Content from "../../components/Content";
import Breadcrumbs from "../../components/Breadcrumbs";

const Product: React.FC = () => {
  return (
    <Content>
      <PromoBanner />
      <Breadcrumbs />
      <h1 className={classes.title}>Apple iPhone 13 128GB, Midnight</h1>
      <div className={classes.contentInner}>
        <div className={classes.slider}></div>
        <div>
          <ul className={classes.infoList}>
            <li className={classes.infoItem}>
              <img
                className={classes.infoIcon}
                src="./assets/images/icons/info-icon-1.png"
                alt=""
              />
              <div>
                <h3 className={classes.infoTitle}>
                  Ridicare Gratuita din Depozit
                </h3>
                <span className={classes.infoDate}>27-29.11.2022</span>
              </div>
            </li>
            <li className={classes.infoItem}>
              <img
                className={classes.infoIcon}
                src="./assets/images/icons/info-icon-2.png"
                alt=""
              />
              <div>
                <h3 className={classes.infoTitle}>Livrare in Chisinau</h3>
                <div className={classes.infoDate}>
                  <span className={classes.value}>49 lei, </span>27-29.11.2022
                </div>
              </div>
            </li>
            <li className={classes.infoItem}>
              <img
                className={classes.infoIcon}
                src="./assets/images/icons/info-icon-3.png"
                alt=""
              />
              <div>
                <h3 className={classes.infoTitle}>Livrare in toata Moldova</h3>
                <div className={classes.infoDate}>
                  <span className={classes.value}>69 lei, </span>27-29.11.2022
                </div>
              </div>
            </li>
          </ul>
          <div className={classes.filterBox}>
            <div>
              <h4 className={classes.filterTitle}>Memorie</h4>
              <ul className={classes.memoryList}>
                <li className={classes.memoryItem}>
                  <a className={classes.memoryLink} href="#">
                    128GB
                  </a>
                </li>
                <li className={classes.memoryItem}>
                  <a className={classes.memoryLink} href="#">
                    256GB
                  </a>
                </li>
                <li className={classes.memoryItem}>
                  <a className={classes.memoryLink} href="#">
                    512GB
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={classes.filterTitle}>Alte culori</h4>
              <ul className={classes.colorList}>
                <li className={classes.colorItem}>
                  <a className={classes.colorLink} href="#"></a>
                </li>
                <li className={classes.colorItem}>
                  <a className={classes.colorLink} href="#"></a>
                </li>
                <li className={classes.colorItem}>
                  <a className={classes.colorLink} href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.orderInner}>
          <div className={classes.orderBox}>
            <div className={classes.oldPrice}>
              18 999 lei <span>(-11%)</span>
            </div>
            <div className={classes.newPrice}>16 999 lei</div>
            <button className={classes.btnBuy}>Adauga in cos</button>
          </div>
        </div>
      </div>
      <section className={classes.info}></section>
    </Content>
  );
};

export default Product;
