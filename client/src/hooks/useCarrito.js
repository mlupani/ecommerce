import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delProduct, addProduct, calcularDinero, calcularCantidad } from '../store/slices/carrito'
import { toast } from 'react-toastify'

const useCarrito = () => {

	const dispatch = useDispatch()
	const { carrito } = useSelector(state => state.carrito)
	const { cantidad, total_dinero } = useSelector(state => state.carrito)

	useEffect(() => {
		dispatch(calcularDinero())
		dispatch(calcularCantidad())
	}, [carrito, dispatch])

	const substractCarrito = (e, producto) => {
		e.preventDefault()
		dispatch(delProduct({producto, cantidad: 1}))
	}

	const substractCarritoProduct = producto => {
		const cantidad = producto.cantidad
		dispatch(delProduct({producto, cantidad}))
	}

	const vaciarCarrito = () => {
		let cantidad
		carrito.forEach(producto => {
			cantidad = producto.cantidad
			dispatch(delProduct({producto, cantidad}))
		})
	}

	const addCarrito = (e, producto) =>{
		e.preventDefault()
		dispatch(addProduct(producto))
		toast('Producto agregado al carrito', {
			position: 'bottom-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
		})
	}

	return {
		dispatch,
		carrito,
		substractCarrito,
		substractCarritoProduct,
		vaciarCarrito,
		addCarrito,
		total_dinero,
		cantidad
	}
}

export default useCarrito
