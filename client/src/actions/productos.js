export const agregarProducto = producto =>{
    return  {
        type: 'agregar_producto',
        producto
    }
}

export const eliminarProducto = (producto, cantidad) => {
    return {
        type: 'eliminar_producto',
        producto,
        cantidad
    }
}