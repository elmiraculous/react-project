import React from "react"
import {Route, Routes} from "react-router-dom"
import {Main} from "./Main/Main"
import {CollectionPoints} from "./CollectionPoints/CollectionPoints"
import {EcoMarket} from "./EcoMarket/EcoMarket"
import {About} from "./About/About"
import {Layout} from "./Layout"
import {Account} from "./Account/Account"
import {HistoryList} from "./Account/History/HistoryList"
import {PromocodeList} from "./Account/Promocodes/PromocodesList"

export const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path='/' element={<Main/>}></Route>
					<Route path='/CollectionPoints' element={<CollectionPoints/>}></Route>
					<Route path='/EcoMarket' element={<EcoMarket/>}></Route>
					<Route path='/About' element={<About/>}></Route>
					<Route path='/Account' element={<Account/>}>
						<Route path='/Account/PromoCodes' element={<PromocodeList/>}></Route>
						<Route path='/Account/History' element={<HistoryList/>}></Route>
					</Route>
				</Route>
			</Routes>

		</div>

	)
}