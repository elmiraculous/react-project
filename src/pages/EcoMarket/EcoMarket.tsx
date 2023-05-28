import React from "react"
import styles from "./EcoMarket.module.sass"
import {MainFilter} from "./components/MainFilter/MainFilter"
import {ProductList} from "./components/Products/ProductList"
import {Sort} from "./components/sort/Sort"

export const EcoMarket = () => {
	return (
		<div className={styles.main}>
			<div className={styles.block}>
				<span className={styles.mainText}>ЭкоМаркет</span>
				<div><Sort/></div>
			</div>
			<div className={styles.block}>
				<div><MainFilter/></div>
				<ProductList/>
			</div>
		</div>
	)
}