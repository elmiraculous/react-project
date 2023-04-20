import React from "react"
import styles from "./Footer.module.sass"
import {Icon} from "../Icon/Icon"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.gmail}>
				<div className={styles.emailImg}><Icon name={"email"}/></div>
				<span className={styles.text}>info@ecorus.ru</span>
			</div>
			<div className={styles.phone}>
				<div className={styles.phoneImg}><Icon name={"phone"}/></div>
				<span className={styles.text}>+7 (800) 880-88-88</span>
			</div>
		</footer>
	)

}