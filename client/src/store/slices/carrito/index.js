import { createSlice } from '@reduxjs/toolkit'

export const carritoSlice = createSlice({
	name: 'carrito',
	initialState: {
		carrito: [],
		total_dinero: 0,
		cantidad: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			let find = null
			state.carrito = state.carrito.map(producto => {
				if(producto._id === action.payload._id){
					producto.cantidad++
					find = 1
				}
				return producto
			})
			if (!find) {
				console.log(action.payload)
				state.carrito = [...(state.carrito || []), {...action.payload, cantidad: 1}]
			}

		},
		delProduct: (state, action) => {
			state.carrito = state.carrito.map(producto => {
				if(producto._id === action.payload.producto._id){
					producto.cantidad = producto.cantidad - action.payload.cantidad
					if(!producto.cantidad) producto = {}
				}
				return producto
			}).filter(prod => prod._id)
		},
		calcularDinero: (state) => {
			let dinero = state.carrito.map(producto => (producto.precio * producto.cantidad) ).reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
			dinero = new Intl.NumberFormat('de-DE').format(dinero)
			dinero = dinero.toString().replace(',','.')
			state.total_dinero = dinero
		},
		calcularCantidad: (state) => {
			state.cantidad = state.carrito.map(producto => producto.cantidad).reduce((a, b) => parseInt(a) + parseInt(b), 0)
		}
	}
})

export const { addProduct, delProduct, calcularDinero, calcularCantidad } = carritoSlice.actions

export default carritoSlice.reducer