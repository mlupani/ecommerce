import { configureStore } from '@reduxjs/toolkit'
import carrito from './slices/carrito'
import productos from './slices/productos'
import categorias from './slices/categorias'

export default configureStore({
	reducer:{
		carrito,
		productos,
		categorias
	}
})