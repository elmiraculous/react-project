import React from "react";
import styles from "../../App.module.sass";
import {Filter} from "./filter/Filter";
import {MainFilter} from "./MainFilter/MainFilter";
export  function EcoMarket(){
    return(
        <div className={styles.main}>
            <div className={styles.block}>
                <span className={styles.mainText}>ЭкоМаркет</span>
                <div><Filter/></div>
            </div>
            <MainFilter/>
        </div>
    )
}