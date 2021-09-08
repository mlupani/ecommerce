export const restarStock = producto => {
    return {
        type: 'restar_stock',
        producto
    }
}

export const devolverStock = (producto, cantidad) => {
    return {
        type: 'devolver_stock',
        producto,
        cantidad
    }
}