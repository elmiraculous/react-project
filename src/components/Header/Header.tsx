import React from "react"
import styles from "./Header.module.sass"
import {NavLink} from "react-router-dom"
import cn from "classnames/bind"
import {Account} from "./component/account/Account"

const cx = cn.bind(styles)

export const Header = () => {
	return (
		<header className={styles.hed}>
			<div className={styles.header}>
				<div className={styles.logo}>
					<img className={styles.img} src="/images/icon.svg" alt={"logo"}/>
				</div>
				<nav>
					<NavLink to="/"
						className={({isActive}) => cx(styles.text,
							{activeLink: isActive})}>Главная</NavLink>
					<NavLink to='/CollectionPoints'
						className={({isActive}) => cx(styles.text,
							{activeLink: isActive})}>Пункты
                        сбора</NavLink>
					<NavLink to="/EcoMarket"
						className={({isActive}) => cx(styles.text,
							{activeLink: isActive})}>ЭкоМаркет</NavLink>
					<NavLink to="/About" className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>О
                        сервисе</NavLink>
				</nav>
				<Account/>
			</div>

		</header>
	)

}