import React from "react";
// @ts-ignore
import classes from "./ContactBox.module.scss";

const ContactBox: React.FC = () => {
  return (
    <section className={classes.contact}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img
            src="https://www.smart.md/catalog/view/smartv3/img/__new_showrooms/dimo-new.jpg"
            alt=""
          />
        </div>
        <h4 className={classes.title}>Chisinau, str. Dimo 4/1</h4>
        <p className={classes.subtitle}>
          Smartphone, Laptop, TV, Gadget și accesorii.
        </p>
        <div className={classes.graphicBox}>
          <div className={classes.graphicItem}>
            <span>Luni-Vineri</span>
            <span>9:00 - 19:00</span>
          </div>
          <div className={classes.graphicItem}>
            <span>Samb-Dum</span>
            <span>9:00 - 18:00</span>
          </div>
        </div>
        <a className={classes.phone} href="tel:+37376076287">
          076076287
        </a>
        <a className={classes.mapLink} href="#">
          Vezi harta
        </a>
      </div>
      <div className={classes.card}>
        <div className={classes.image}>
          <img
            src="https://www.smart.md/catalog/view/smartv3/img/__new_showrooms/dimo-new.jpg"
            alt=""
          />
        </div>
        <h4 className={classes.title}>Chisinau, str. Dimo 4/1</h4>
        <p className={classes.subtitle}>
          Smartphone, Laptop, TV, Gadget și accesorii.
        </p>
        <div className={classes.graphicBox}>
          <div className={classes.graphicItem}>
            <span>Luni-Vineri</span>
            <span>9:00 - 19:00</span>
          </div>
          <div className={classes.graphicItem}>
            <span>Samb-Dum</span>
            <span>9:00 - 18:00</span>
          </div>
        </div>
        <a className={classes.phone} href="tel:+37376076287">
          076076287
        </a>
        <a className={classes.mapLink} href="#">
          Vezi harta
        </a>
      </div>
      <div className={classes.card}>
        <div className={classes.image}>
          <img
            src="https://www.smart.md/catalog/view/smartv3/img/__new_showrooms/dimo-new.jpg"
            alt=""
          />
        </div>
        <h4 className={classes.title}>Chisinau, str. Dimo 4/1</h4>
        <p className={classes.subtitle}>
          Smartphone, Laptop, TV, Gadget și accesorii.
        </p>
        <div className={classes.graphicBox}>
          <div className={classes.graphicItem}>
            <span>Luni-Vineri</span>
            <span>9:00 - 19:00</span>
          </div>
          <div className={classes.graphicItem}>
            <span>Samb-Dum</span>
            <span>9:00 - 18:00</span>
          </div>
        </div>
        <a className={classes.phone} href="tel:+37376076287">
          076076287
        </a>
        <a className={classes.mapLink} href="#">
          Vezi harta
        </a>
      </div>
    </section>
  );
};

export default ContactBox;
