import React from 'react';
import Content from '../../components/Content';
import { Link, useLocation } from 'react-router-dom';
// @ts-ignore
import classes from './Auth.module.scss';

const Auth: React.FC = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Content>
      <div className={classes.container}>
        <h2 className={classes.title}>Autorizarea</h2>
        <form className={classes.form}>
          <input className={classes.input} type="email" placeholder="Email" />
          <input
            className={classes.input}
            type="password"
            placeholder="Parola"
          />
          <div className={classes.btnBox}>
            <Link className={classes.link} to={'/auth'}>
              Inregistrare
            </Link>
            <button className={classes.btn}>Intra</button>
          </div>
        </form>
      </div>
    </Content>
  );
};

export default Auth;
