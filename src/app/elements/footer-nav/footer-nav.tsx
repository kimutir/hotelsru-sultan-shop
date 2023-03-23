import React from "react";
import FooterNavLink from "./footer-nav-link/footer-nav-link";
import styles from "./footer-nav.module.css";

interface PropsType {
  links: string[];
  title: string;
}

const FooterNav: React.FC<PropsType> = ({ links, title }) => {
  return (
    <div className={styles.nav}>
      <p className={styles.title}>{title}</p>
      <ul className={styles["nav-list"]}>
        {links.map((link) => (
          <FooterNavLink key={link} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
