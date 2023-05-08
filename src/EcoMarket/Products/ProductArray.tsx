import React from "react"
import styles from "./Products.module.sass"
import {Products, ProductsProps} from "./Products"
import {Balance} from "./Balance/Balance"


interface ProductArrayProps {
    products: Array<ProductsProps>
}

export const ProductArray = (props: ProductArrayProps) => {
	return (
		<div className={styles.array}>
			<Balance/>

			{props.products.map((products: ProductsProps, index: number) =>
				<Products
					key={index}
					img={products.img}
					brand={products.brand}
					name={products.name}
					type={products.type}
					price={products.price}
				/>)
			}
		</div>


	)
}