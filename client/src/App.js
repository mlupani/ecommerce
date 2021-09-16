import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import WishListPage from './pages/WishListPage'
import MisDatosPage from './pages/MisDatosPage'
import { checkToken } from './store/slices/usuario'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkToken())
	}, [dispatch])

	return (
		<Router>
			<Switch>
				<Route path="/cart">
					<CartPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/wishlist">
					<WishListPage />
				</Route>
				<Route path="/misDatos">
					<MisDatosPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	)
}
export default App
