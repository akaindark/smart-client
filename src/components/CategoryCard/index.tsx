import React, { useEffect, useState } from 'react';
// @ts-ignore
import classes from './CategoryCard.module.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface Props {
  id: number;
  title: string;
  imgUrl: string;
}

const CategoryCard: React.FC<Props> = ({ id, title, imgUrl }) => {
  return (
    <li className={classes.listItem}>
      <Link to="/catalog" className={classes.listLink}>
        <img className={classes.image} src={imgUrl} alt={title} />
        <h3 className={classes.title}>{title}</h3>
      </Link>
    </li>
  );
};

export default CategoryCard;
