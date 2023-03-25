import React from "react";
import styles from "./EcoMarket.module.sass";
import {Filter} from "./filter/Filter";
import {MainFilter} from "./MainFilter/MainFilter";
import {ProductList} from "./Products/ProductList";
export const EcoMarket=()=>{
    return(
        <div className={styles.main}>
            <div className={styles.block}>
                <span className={styles.mainText}>ЭкоМаркет</span>
                <div><Filter/></div>
            </div>
            <div className={styles.block}>
                <div><MainFilter/></div>
                <ProductList/>
            </div>
        </div>
    )
}