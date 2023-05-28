import React from "react"
import {PromoСod, PromoСodProps} from "./PromoСod"

interface PromoСodArrayProps {
    promocod: Array<PromoСodProps>
}

export const PromoСodArray = (props: PromoСodArrayProps) => {
	return (
		<div>
			{props.promocod.map((promocod: PromoСodProps, index: number) =>
				<PromoСod key={index}
					active={promocod.active}
					date={promocod.date}
					link={promocod.link}
					price={promocod.price}/>)}
		</div>

	)
}