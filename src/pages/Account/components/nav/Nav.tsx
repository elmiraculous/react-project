import React from "react"
import {NavLink} from "react-router-dom"
import cn from "classnames/bind"
import styles from "./Nav.module.sass"

const cx = cn.bind(styles)

export const Nav = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to="/Account/PromoCodes"
				className={({isActive}) => cx(styles.text,
					{activeLink: isActive})}>Промокоды</NavLink>
			<NavLink to="/Account/History"
				className={({isActive}) => cx(styles.text,
					{activeLink: isActive})}>История</NavLink>

		</nav>
	)
}