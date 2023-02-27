import React from "react";
import styles from './Filter.module.sass'
export  function Filter(){
    return(
        <div className={styles.block}>
            <button className={styles.white}>По популярности</button>
            <button className={styles.white}>По цене</button>
            <button className={styles.white}>По новизне</button>
        </div>
    )
}
