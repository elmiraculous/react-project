import React from "react"
import {PromocodesArray} from "./PromocodesArray"

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
export const PromocodeList = () => {
	return (
		<div>
			<PromocodesArray promocod={productType}/>
		</div>
	)
}