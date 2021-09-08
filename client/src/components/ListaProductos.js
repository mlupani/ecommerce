import { useDispatch, useSelector } from 'react-redux'
import { carritoimg } from './imagenes.js'
import { agregarProducto } from '../actions/productos'
import { restarStock} from '../actions/stock'
import GameCard from './Card'

const ListaProductos = () => {

    const productos = useSelector(state =>state.productosReducer.stock)
    const dispatch = useDispatch()

    const addCarrito = producto =>{
        return(dispatch) =>{
            dispatch(agregarProducto(producto))
            dispatch(restarStock(producto))
        }
    }

    return (
        <>
            <div className="row col-md-6">
                {productos.map(product =>
                    <div key={product.id} className="col-sm-5 col-md-6">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img style={{width:'120px', height:'160px'}} src={product.img} alt={product.name}/>
                                </div>
                                <GameCard>
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description} </p>
                                    {(product.stock)?
                                    <>
                                        <p className="card-text">Quedan {product.stock} en stock </p>
                                        <button onClick={() => dispatch(addCarrito(product))} className="btn btn-primary">{carritoimg} Añadir USD {product.price}</button>
                                    </>:
                                        <p className='text-danger'>No hay mas stock</p>
                                    }
                                </GameCard>
                            </div>
                        </div>
                    </div>
            )}
            </div>
        </>
    );
}

export default ListaProductos;
