import React from "react"
import {HistoryArray} from "./HistoryArray"

const historyType = [
	{
		address: "Казань, Кремлёвская, 88",
		material: [{type: "Пластик:", number: "1 кг"}, {type: "Стекло:", number: "2 кг"}, {
			type: "Бумага:",
			number: "25 кг"
		}],
		date: "25.09.2021",
		price: 1000
	},
	{
		address: "Казань, проспект Победы, 141",
		material: [{type: "Пластик:", number: "1 кг"}, {type: "Стекло:", number: "3 кг"}, {
			type: "Бумага:",
			number: "5 кг"
		}],
		date: "25.09.2021",
		price: 900
	}
]
export const HistoryList = () => {
	return (
		<div>
			<HistoryArray history={historyType}/>
		</div>
	)

}