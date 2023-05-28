import React from "react"
import {Route, Routes} from "react-router-dom"
import {Main} from "./pages/Main/Main"
import {CollectionPoints} from "./pages/CollectionPoints/CollectionPoints"
import {About} from "./pages/About/About"
import {Layout} from "./Layout"
import {Account} from "./pages/Account/Account"
import {EcoMarket} from "./pages/EcoMarket/EcoMarket"
import {PromoСodList} from "./pages/Account/components/Promocodes/PromoСodList"
import {HistoryList} from "./pages/Account/components/History/HistoryList"


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
						<Route path='/Account/PromoCodes' element={<PromoСodList/>}></Route>
						<Route path='/Account/History' element={<HistoryList/>}></Route>
					</Route>
				</Route>
			</Routes>

		</div>

	)
}