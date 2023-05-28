import React from "react"
import styles from "./Account.module.sass"
import {Outlet} from "react-router-dom"
import {Profile} from "./components/Profile/Profile"
import {Nav} from "./components/nav/Nav"

export const Account = () => {
	return (
		<div className={styles.main}>
			<span className={styles.main__text}>Личный кабинет</span>
			<div className={styles.main__block}>
				<div><Profile/></div>
				<div>
					<Nav/>
					<Outlet/>
				</div>
			</div>
		</div>
	)
}