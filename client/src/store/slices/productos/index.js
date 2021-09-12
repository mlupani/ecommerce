import { createSlice } from '@reduxjs/toolkit'
import productosAPI from '../../../api/productos'

export const productosSlice = createSlice({
	name: 'productos',
	initialState: {
		productos: [],
		trendings: [],
		total: 0
	},
	reducers: {
		setProducts: (state, action) => {
			state.productos = action.payload.productos
			state.total = action.payload.total
		},
		setTrendingProducts: (state, action) => {
			state.trendings = action.payload
		},
		delStock: (state, action) => {
			state.productos = state.productos.map(producto => { if(producto._id === action.payload._id) producto.stock--;return producto})
		},
		addStock: (state, action) => {
			state.productos = state.productos.map(producto => { if(producto._id === action.payload.producto._id) {producto.stock=producto.stock+action.payload.cantidad; if(!producto.cantidad)producto.cantidad = 1}return producto})
		}
	}
})

export const { addStock, delStock, setProducts, setTrendingProducts } = productosSlice.actions

export const fetchAllProducts = () => async (dispatch) => {
	const productosRes = await productosAPI.get('/productos?limite=10')
	const { total, productos } = productosRes.data
	const res = productos.map(prod => {prod.cantidad = 1; return prod})
	dispatch(setProducts({total, productos: res}))
}

export const fetchTrendingProducts = () => async (dispatch) => {
	const productosRes = await productosAPI.get('/productos/trending')
	const { resp: productos } = productosRes.data
	dispatch(setTrendingProducts(productos))
}

export default productosSlice.reducer