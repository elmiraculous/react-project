import React from "react"
import styles from "./Main.module.sass"
import {Slider} from "./components/slider/Slider"
import {Card} from "./components/card/Card"

const slides = [
	{
		title: "Сделаем мир чище",
		content: "Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов",
		textButton: "Условия сервиса",
		image: "/images/recycling-concept-flat-lay 2 2.png",
		color: "#B3EDC8"
	},
	{
		title: "А вы знали...",
		content: "что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? ",
		textButton: "Узнать больше",
		image: "/images/слайд2 1.png",
		color: "#FFE48F"
	},
	{
		title: "Что с масками?",
		content: "Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку.",
		textButton: "Пункты сбора масок",
		image: "/images/Frame 2058.png",
		color: "#BFF0DE"
	}
]
export const Main = () => {
	return (
		<div className={styles.main}>
			<Slider slides={slides}/>
			<div className={styles.block}>
				<Card title={"Пункты сбора"}
					content={"Посмотри, где в твоем городе можно сдать вторсырье на переработку"}
					img="/images/Frame 1997.png"
					link={"/CollectionPoints"}/>
				<Card title={"ЭкоМаркет"}
					content={"Используй заработанные экокоины для покупки товаров из переработанных материалов "}
					img="/images/OrgUVC-L_Bus-39_Single-06 [преобразованный] 1.png" link={"/EcoMarket"}/>
			</div>
		</div>
	)
}