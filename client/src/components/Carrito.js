import { useSelector, useDispatch } from 'react-redux';
import { carritoimgmenos } from './imagenes'
import { eliminarProducto } from '../actions/productos'
import { devolverStock } from '../actions/stock'

const Carrito = () => {

    const dispatch = useDispatch()
    const carrito = useSelector(state =>state.carritoReducer.carrito)

    const substractCarrito = (producto) => {
        return (dispatch) => {
            dispatch(eliminarProducto(producto,1));
            dispatch(devolverStock(producto,1));
        }
    }

    const substractCarritoProduct = producto => {
        const cantidad = producto.cantidad
        return (dispatch) => {
            dispatch(eliminarProducto(producto,cantidad));
            dispatch(devolverStock(producto,cantidad));
        }
    }

    const vaciarCarrito = () => {
        return (dispatch) => {
            let cantidad
            carrito.forEach(producto => {
                cantidad = producto.cantidad
                dispatch(eliminarProducto(producto,cantidad));
                dispatch(devolverStock(producto,cantidad));
            });
        }
    }

    return (
         <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
             {
                (carrito.length > 0)?
                <div className="alert alert-info" role="alert"><p>Productos en el carrito: {carrito.map(producto => producto.cantidad).reduce((a, b) => parseInt(a) + parseInt(b), 0)} </p>
                <p>Total: USD {carrito.map(producto => (producto.price * producto.cantidad) ).reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2)} </p>
                <button onClick={() =>dispatch(vaciarCarrito())} className="btn btn-primary btn-sm">{carritoimgmenos} Vaciar carrito</button></div>:''

            }
            {carrito.map(producto =>
                <div key={producto.id} className="list-group">
                    <div href="#" className="list-group-item list-group-item-action" aria-current="true">
                        <div style={{float:'left'}} className="justify-content-between">
                        <h5 className="mb-1">{producto.name} x {producto.cantidad} </h5>
                        <small style={{float:"left"}}>USD {(producto.price*producto.cantidad).toFixed(2)}</small>
                        <br/>
                        <button onClick={() =>dispatch(substractCarrito(producto))} className="btn btn-danger btn-sm">{carritoimgmenos} Quitar del carro x1</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() =>dispatch(substractCarritoProduct(producto, producto.cantidad))} className="btn btn-danger btn-sm">{carritoimgmenos} Quitar Todos</button>
                        </div>
                        <div className="justify-content-between">
                        <div style={{float:"right", 'textAlign':'right'}}><img style={{width:'80px', height:'110px'}} src={producto.img} alt={producto.name}/></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrito;
