import React from "react";
// @ts-ignore
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.topBox}>
        <p>*Toate ofertele sunt valabile in limita stocului disponibil.</p>
        <p>
          Navigarea pe acest site se considera acceptarea Dvs. cu privire la
          politica de utilizare a <a href="#">cookie-urilor</a>.
        </p>
      </div>
      <div className={classes.inner}>
        <div className={classes.logo}>
          <img src="./assets/images/footer/logo-footer.png" alt="smart logo" />
        </div>
        <div className={classes.info}>
          <p>© 2013-2021 Toate drepturile rezervate</p>
          <p>Smart Click SRL</p>
          <p>Operator de date cu caracter personal cu Nr. 0001919</p>
          <p>Republica Moldova, mun. Chișinău, str. Tighina 31, MD 2001</p>
          <p>IDNO: 1013600016479 I TVA : 0507029</p>
          <p>NOTIFICARE NR. P-14128/2020 DIN 16.09.2020</p>
          <p>
            IBAN : MD71MO2224ASV62459567100 I Mobiasbanca – OTP Group S.A I
            C/B:MOBBMD22
          </p>
          <a className={classes.link} href="#">
            Agenția pentru Protecția Consumatorilor și Supravegherea Pieții
          </a>
          <a className={classes.link} href="#">
            Termeni și condiții
          </a>
        </div>
        <div>
          <a className={classes.socialLink} href="#">
            <img
              src="./assets/images/icons/facebook-icon.png"
              alt="facebook link"
            />
          </a>
          <a className={classes.socialLink} href="#">
            <img
              src="./assets/images/icons/instagram-icon.png"
              alt="instagram link"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
