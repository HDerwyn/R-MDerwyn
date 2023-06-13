import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  const { onSearch } = props;

  return (
    <nav className={styles.navS}>
      <div className={styles.links}>
        <NavLink to="/About" className={`${styles.link} ${styles.but}`}>
          <div className={styles.letrasbotones}> About </div>
        </NavLink>
        <NavLink to="/Home" className={`${styles.link} ${styles.but}`}>
          <div className={styles.letrasbotones}> Home </div>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
