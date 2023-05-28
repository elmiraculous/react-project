import React from "react"
import styles from "./Products.module.sass"
import {ProductArray} from "./ProductArray"

const productType = [
	{
		img: "/images/product/image 2 (2).png",
		brand: "NIKE",
		name: "Nike Air Max 2021",
		type: "Мужская обувь",
		price: 1000
	},
	{
		img: "/images/product/image 2 (3).png",
		brand: "NIKE",
		name: "Nike Air Max 90 Premium",
		type: "Мужская обувь",
		price: 750
	},
	{
		img: "/images/product/image 2 (4).png",
		brand: "Adidas",
		name: "Adidas Alphabounce RC",
		type: "Мужская обувь",
		price: 1200
	},
	{
		img: "/images/product/image 2 (5).png",
		brand: "H&M",
		name: "Nike Air Max 2021",
		type: "Мужская обувь",
		price: 1000
	},
	{
		img: "/images/product/image 2 (6).png",
		brand: "NIKE",
		name: "Nike Air Force 1 Low",
		type: "Мужская обувь",
		price: 2100
	}]

export const ProductList = () => {
	return (
		<div className={styles.array}>
			<ProductArray products={productType}/>
		</div>
	)
}