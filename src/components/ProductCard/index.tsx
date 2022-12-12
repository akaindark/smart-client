import React, { useContext } from 'react';
// @ts-ignore
import classes from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Context } from '../..';

const ProductCard: React.FC = ({ device }: any) => {
  return (
    <li className={classes.card}>
      <Link to="/product" className={classes.link}>
        <img className={classes.img} src={device.imgUrl} alt="" />
        <h4 className={classes.title}>{device.title}</h4>
      </Link>
      <div className={classes.info}>
        <div className={classes.priceInner}>
          <div className={classes.priceBox}>
            <span className={classes.smallText}>pe lună</span>
            <span className={classes.price}>{device.creditPrice} lei</span>
          </div>
          <div className={classes.priceBox}>
            <span className={classes.oldPrice}>{device.oldPrice} lei</span>
            <span className={classes.fullPrice}>{device.newPrice} lei</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
