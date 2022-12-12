import React from 'react';
// @ts-ignore
import classes from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

interface deviceProps {
  imgUrl: string;
  title: string;
  creditPrice: number;
  oldPrice: number;
  newPrice: number;
}

const ProductCard: React.FC = ({
  imgUrl,
  title,
  creditPrice,
  oldPrice,
  newPrice,
}: deviceProps) => {
  return (
    <div className={classes.card}>
      <Link to="/product" className={classes.link}>
        <img className={classes.img} src={imgUrl} alt="" />
        <h4 className={classes.title}>{title}</h4>
      </Link>
      <div className={classes.info}>
        <div className={classes.priceInner}>
          <div className={classes.priceBox}>
            <span className={classes.smallText}>pe lună</span>
            <span className={classes.price}>{creditPrice} lei</span>
          </div>
          <div className={classes.priceBox}>
            <span className={classes.oldPrice}>{oldPrice} lei</span>
            <span className={classes.fullPrice}>{newPrice} lei</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
