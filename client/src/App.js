import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import CategoriasPage from './pages/CategoriasPage'
import LoginPage from './pages/LoginPage'
import WishListPage from './pages/WishListPage'
import MisDatosPage from './pages/MisDatosPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { checkToken } from './store/slices/usuario'
import { fetchAllCategories } from './store/slices/categorias'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import ProductListPage from './pages/ProductListPage'

function App() {

	const dispatch = useDispatch()

	//loading states
	useEffect(() => {
		dispatch(fetchAllCategories())
	}, [dispatch])

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
				<Route path="/categorias">
					<CategoriasPage />
				</Route>
				<Route path="/categoria/:id">
					<ProductListPage />
				</Route>
				<Route path="/wishlist">
					<WishListPage />
				</Route>
				<Route path="/misDatos">
					<MisDatosPage />
				</Route>
				<Route path="/Product/:id">
					<ProductDetailPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	)
}
export default App
