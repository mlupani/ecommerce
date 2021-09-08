const productos = [
    { id:1, name: 'God of war', description:'Kratos en God Of War 1', price:'20.99', img: '../images/gow1.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)},
    { id:2, name: 'God of war II', description:'Kratos en God Of War 2', price:'40.50', img: './images/gow2.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)},
    { id:3, name: 'God of war III', description:'Kratos en God Of War 3', price:'50.49', img: './images/gow3.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)},
    { id:4, name: 'God of war IV', description:'Kratos en God Of War 4', price:'60.99', img: './images/gow4.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)},
    { id:5, name: 'Resident Evil 2 Remake', description:'Kratos en God Of War 1', price:'35.99', img: '../images/re2.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)},
    { id:6, name: 'Resident Evil 3 Remake', description:'Kratos en God Of War 2', price:'45.50', img: './images/re3.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)},
    { id:7, name: 'Resident Evil 4', description:'Kratos en God Of War 3', price:'10.49', img: './images/re4.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)},
    { id:8, name: 'Resident Evil 7', description:'Kratos en God Of War 4', price:'50.99', img: './images/re7.jpg', cantidad:1, stock: parseInt(Math.random() * (1 - 99) + 99)}
]

const productosReducer = (state = {stock: productos}, action) => {
    switch (action.type) {
        case 'restar_stock':
            return{
                ...state,
                stock: state.stock.map(producto => { if(producto.id === action.producto.id) producto.stock--;return producto;})
            }

        case 'devolver_stock':
            return{
                ...state,
                stock: state.stock.map(producto => { if(producto.id === action.producto.id) {producto.stock=producto.stock+action.cantidad; if(!producto.cantidad)producto.cantidad = 1;};return producto;})
            }

        default:
            return state
    }
}

export default productosReducer;