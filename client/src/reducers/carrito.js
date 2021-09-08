const carritoReducer = (state = {carrito:[]}, action) => {
    let newState = {}
    switch (action.type) {
        case 'agregar_producto':
            //chequeamos que el producto ya este en el carrito, si esta le sumamos uno a su cantidad
            const productoEncontrado = state.carrito.find(producto => producto.id === action.producto.id);
            if(productoEncontrado)  {
                newState = state.carrito.map(producto => {
                    if(producto.id === action.producto.id)
                        producto.cantidad++;

                        return producto;
                })

            }
            else newState = [...(state.carrito || []), action.producto]

            return {
                ...state,
                carrito: newState
            }

        case 'eliminar_producto':

            newState = state.carrito.map(producto => {
                if(producto.id === action.producto.id){
                    producto.cantidad = producto.cantidad - action.cantidad;
                    if(!producto.cantidad) producto = {}
                }
                return producto;
            })

            return{
                ...state,
                carrito: newState.filter(producto => producto.id)
                //carrito: newState
            }

        default:
            return state
    }
}



export default carritoReducer