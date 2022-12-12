import React, { useContext } from 'react';
import PromoBanner from '../../components/PromoBanner';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductCard from '../../components/ProductCard';

// @ts-ignore
import classes from './Catalog.module.scss';
import SocialBlock from '../../components/SocialBlock';
import Advantages from '../../components/Advantages';
import { Context } from '../..';

const Catalog: React.FC = () => {
  const { device }: any = useContext(Context);
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
          {device.devices.map((device) => (
            <ProductCard key={device.id} device={device} />
          ))}
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
