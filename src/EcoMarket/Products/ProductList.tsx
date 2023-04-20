import React from "react"
import styles from "./Products.module.sass"
import {ProductArray} from "./ProductArray"
import NikeAirMax2021 from "../../images/product/image 2 (2).png"
import NikeAirMax90Premium from "../../images/product/image 2 (3).png"
import AdidasAlphabounceRC from "../../images/product/image 2 (4).png"
import HMAirMax2021 from "../../images/product/image 2 (5).png"
import NikeAirForce1Low from "../../images/product/image 2 (6).png"
import {Balance} from "./Balance/Balance"

const productType=[
	{img: NikeAirMax2021, brand: "NIKE", name: "Nike Air Max 2021", type: "Мужская обувь", price: 1000},
	{img: NikeAirMax90Premium, brand: "NIKE", name: "Nike Air Max 90 Premium", type: "Мужская обувь", price: 750},
	{img: AdidasAlphabounceRC, brand: "Adidas", name: "Adidas Alphabounce RC", type: "Мужская обувь", price: 1200},
	{img: HMAirMax2021, brand: "H&M", name: "Nike Air Max 2021", type: "Мужская обувь", price: 1000},
	{img: NikeAirForce1Low, brand: "NIKE", name: "Nike Air Force 1 Low", type: "Мужская обувь", price: 2100}]

export const ProductList=()=>{
	return(
		<div className={styles.array}>
			<ProductArray  products={productType}/>
		</div>
	)
}