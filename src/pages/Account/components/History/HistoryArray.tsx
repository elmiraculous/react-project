import React from "react"
import {History, HistoryProps} from "./History"


interface HistoryArrayProps {
    history: Array<HistoryProps>
}

export const HistoryArray = (props: HistoryArrayProps) => {
	return (
		<div>
			{props.history.map((history: HistoryProps, index: number) =>
				<History
					key={index}
					address={history.address}
					material={history.material}
					date={history.date}
					price={history.price}
				/>)}
		</div>


	)
}