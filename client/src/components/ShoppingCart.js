import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useCarrito from '../hooks/useCarrito'
import Preloder from './Preloder'

const ShoppingCart = () => {

	const { status, carrito, total_dinero, envio } = useSelector(({carrito}) => carrito)
	const { addCarrito, substractCarritoProduct, removeProductCarrito, calcularEnvio } = useCarrito()
	const [shipping, setShipping] = useState(envio)

	useEffect(() => {
		calcularEnvio(shipping)
	}, [shipping])

	const handleCantidadProducto = (value, producto) => {
		addCarrito(null, producto, value)
	}

	const handleCantidadProductoButton = (type, producto) => {
		if(type === 'plus'){
			addCarrito(null, producto, producto.cantidad + 1)
		}

		if(type === 'minus'){
			substractCarritoProduct(null, producto)
		}
	}

	const handleRemoveProduct = (e, producto) => {
		removeProductCarrito(e, producto)
	}

	return (
		<div className="shopping-cart section" style={{paddingTop: '0px'}}>
			<div className="container">
				<div className="row">
					<div className="col-12" style={{textAlign: 'center'}}>
						{
							carrito.length && status !== 'checking' ?
								<table className="table shopping-summery">
									<thead>
										<tr className="main-hading">
											<th>PRODUCTO</th>
											<th>DESCRIPCION</th>
											<th className="text-center">PRECIO UNIDAD</th>
											<th className="text-center">CANTIDAD</th>
											<th className="text-center">TOTAL</th>
											<th className="text-center"><i className="ti-trash remove-icon"></i></th>
										</tr>
									</thead>
									<tbody>
										{
											carrito.map(prod =>
												<tr key={prod._id} >
													<td className="image" data-title="No"><img src={prod.img} alt="#"/></td>
													<td className="product-des" data-title="Description">
														<p className="product-name"><a href="#">{prod.nombre}</a></p>
														<p className="product-des" title={prod.descripcion} style={{width: '500px', whiteSpace: 'nowrap', textOverflow: 'ellipsis',overflow: 'hidden'}}>{prod.descripcion}</p>
													</td>
													<td className="price" data-title="Price"><span>${prod.precio}</span></td>
													<td className="qty" data-title="Qty">
														<div className="input-group">
															<div className="button minus">
																<button onClick={() => handleCantidadProductoButton('minus', prod)} id="minus" type="button" className="btn btn-primary btn-number" disabled={prod.cantidad === 1 ? true : false} data-type="minus" data-field="quant[1]">
																	<i className="ti-minus"></i>
																</button>
															</div>
															<input type="text" onChange={(e) => handleCantidadProducto(e.target.value, prod)} name="quant[1]" className="input-number" value={prod.cantidad}  data-min="1" data-max="100" />
															<div   className="button plus">
																<button onClick={() => handleCantidadProductoButton('plus', prod)} id="plus" type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
																	<i  className="ti-plus"></i>
																</button>
															</div>
														</div>
													</td>
													<td className="total-amount" data-title="Total"><span>{new Intl.NumberFormat('de-DE').format(prod.precio * prod.cantidad)}</span></td>
													<td className="action" data-title="Remove"><a onClick={(e) => handleRemoveProduct(e, prod)} href="#"><i className="ti-trash remove-icon"></i></a></td>
												</tr>
											)
										}
									</tbody>
								</table> :
								status === 'checking' ? 
									<Preloder/> :
									<h5>No hay productos en el carrito</h5>


						}
					</div>
				</div>
				{
					carrito.length && status !== 'checking' ?
						<div className="row">
							<div className="col-12">
								<div className="total-amount">
									<div className="row">
										<div className="col-lg-8 col-md-5 col-12">
											<div className="left">
												<div className="checkbox">
													<label className={`checkbox-inline ${shipping ? 'checked':''}`} htmlFor="2">
														<input onChange={() => setShipping(prev => prev === 200 ? 0 : 200)} name="news" id="2" type="checkbox"/> Envio (+200$)
													</label>
												</div>
											</div>
										</div>
										<div className="col-lg-4 col-md-7 col-12">
											<div className="right">
												<ul>
													<li>Subtotal<span>$ {total_dinero}</span></li>
													<li>Envio<span>{shipping ? `$ ${shipping}` : 'Gratis'} </span></li>
													<li className="last">Tu pago<span>$ {total_dinero + envio}</span></li>
												</ul>
												<div className="button5">
													<Link to="#" className="btn">Acceder al pago</Link>
													<Link to="/" className="btn">Continuar comprando</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> : ''
				}
			</div>
		</div>
	)
}

export default ShoppingCart
