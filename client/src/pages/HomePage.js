import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../store/slices/productos'
import { fetchAllCategories } from '../store/slices/categorias'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Trending from '../components/Trending'
import Preloder from '../components/Preloder'

function HomePage() {

	const dispatch = useDispatch()
	const { productos } = useSelector(({productos}) => productos)
	const { categorias } = useSelector(({categorias}) => categorias)

	//loading states
	useEffect(() => {
		dispatch(fetchAllProducts())
		dispatch(fetchAllCategories())
	}, [dispatch])

	if(!productos.length || !categorias.length || !categorias.length)
		return <Preloder/>

	return (
		<>
			<Header/>
			<Hero/>
			<Section/>
			<Trending/>
		</>
	)
}
export default HomePage