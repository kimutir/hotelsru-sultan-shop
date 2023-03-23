import React from "react";
import styles from "./footer-nav-link.module.css";

interface PropsType {
  link: string;
}

const FooterNavLink: React.FC<PropsType> = ({ link }) => {
  return (
    <li>
      <a className={styles.link} href="#">
        {link}
      </a>
    </li>
  );
};

export default FooterNavLink;
