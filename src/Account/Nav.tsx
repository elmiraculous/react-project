import React from "react"
import {NavLink} from "react-router-dom"
import cn from "classnames"
import styles from "./Nav.module.sass"

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to="/Account/PromoCodes"
				className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>Промокоды</NavLink>
			<NavLink to="/Account/History"
				className={({isActive}) => cn(styles.text, isActive && styles.activeLink)}>История</NavLink>

		</nav>
	)
}