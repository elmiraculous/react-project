import React from "react"
import {PromoСodArray} from "./PromocodesArray"

const productType = [
	{
		active: true,
		date: "25.09.2021",
		link: "adidas.com/clothes/WddfJfsf7dt6fsHFIuj...",
		price: "1000 ₽"
	},
	{
		active: false,
		date: "25.09.2021",
		link: "adidas.com/clothes/WddfJfsf7dt6fsHFIuj...",
		price: "100 ₽"
	},
	{
		active: false,
		date: "25.09.2021",
		link: "adidas.com/clothes/WddfJfsf7dt6fsHFIuj...",
		price: "400 ₽"
	}

]
export const PromoСodList = () => {
	return (
		<div>
			<PromoСodArray promocod={productType}/>
		</div>
	)
}