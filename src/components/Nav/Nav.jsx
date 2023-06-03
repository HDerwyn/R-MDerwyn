import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"

export default function Nav(props) {

    const { onSearch } = props
    

    return(
        <nav className={styles.navS}>
            <SearchBar onSearch={onSearch}/>
        </nav>

    );

}