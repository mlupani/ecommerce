import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllProducts } from './store/slices/productos'
import { fetchAllCategories } from './store/slices/categorias'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import Trending from './components/Trending'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import Popular from './components/Popular'

function App() {

	const dispatch = useDispatch()

	//loading states
	useEffect(() => {
		dispatch(fetchAllProducts())
		dispatch(fetchAllCategories())
	}, [dispatch])

	return (
		<>
			<Header/>
			<Hero/>
			<Section/>
			<Trending/>
			<ToastContainer />
			{/*<Popular/>*/}
		</>
	)
}
export default App
