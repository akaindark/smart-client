import React, { useEffect, useState } from 'react';
import data from './data';
import Content from '../../components/Content';
import SearchForm from '../../components/SearchForm';

// @ts-ignore
import classes from './Home.module.scss';
import CategoryCard from '../../components/CategoryCard';
import SocialBlock from '../../components/SocialBlock';
import ContactBox from '../../components/ContactBox';
import Advantages from '../../components/Advantages';

const Home: React.FC = () => {
  return (
    <>
      <Content>
        <SearchForm />
        <ul className={classes.list}>
          {data.map((item) => (
            <CategoryCard
              id={item.id}
              key={item.id}
              title={item.title}
              imgUrl={item.imgUrl}
            />
          ))}
        </ul>
        <SocialBlock />
        <ContactBox />
        <Advantages />
      </Content>
    </>
  );
};

export default Home;
