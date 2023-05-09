import React from "react"
import {Promocodes, PromocodesProps} from "./Promocodes"

interface PromocodesArrayProps {
    promocod: Array<PromocodesProps>
}

export const PromocodesArray = (props: PromocodesArrayProps) => {
	return (
		<div>
			{props.promocod.map((promocod: PromocodesProps, index: number) =>
				<Promocodes key={index}
					active={promocod.active}
					date={promocod.date}
					link={promocod.link}
					price={promocod.price}/>)}
		</div>

	)
}