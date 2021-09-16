import { useState } from 'react'
import Preloder from './Preloder'
import useFavoritos from '../hooks/useFavoritos'

const WishList = () => {

	const { delFavoritos, favoritos, status } = useFavoritos()
	const [checks, setChecks] = useState([])

	const checkAll = (e) => {
		if(e.target.checked){
			setChecks(favoritos.map(({_id}) => _id))
		}
		else{
			setChecks([])
		}
	}

	const handleCheck = (id) => {
		if(checks.includes(id))
			setChecks(checks.filter(idProd => idProd !== id))
		else
			setChecks(prev => [...prev, id])
	}

	const handleDelSelection = () => {
		favoritos.forEach(prod => {
			if(checks.includes(prod._id)){
				delFavoritos(null, prod)
			}
		})
		setChecks([])
	}

	console.log(checks)

	return (
		<div className="shopping-cart section" style={{paddingTop: '0px'}}>
			<div className="container">
				<div className="row">
					<div className="col-12" style={{textAlign: 'center'}}>
						{
							favoritos.length && status !== 'checking' ?
								<table className="table shopping-summery">
									<thead>
										<tr className="main-hading">
											<th>PRODUCTO</th>
											<th>DESCRIPCION</th>
											<th className="text-center">PRECIO</th>
											<th className="text-center">
												<input type="checkbox" checked={ checks.length ? true : false} onChange={checkAll} name="eliminar_seleccion" id="eliminar_seleccion" /> &nbsp;
												{
													checks.length ?	<a onClick={handleDelSelection} style={{color: '#3483fa'}} href="#">Eliminar seleccion</a> :
														<a style={{color:'rgba(0,0,0,.1)'}}>Eliminar seleccion</a>
												}
											</th>
										</tr>
									</thead>
									<tbody>
										{
											favoritos.map(prod =>
												<tr key={prod._id} >
													<td className="image" data-title="No"><img src={prod.img} alt="#"/></td>
													<td className="product-des" data-title="Description">
														<p className="product-name"><a href="#">{prod.nombre}</a></p>
														<p className="product-des" title={prod.descripcion} style={{width: '500px', whiteSpace: 'nowrap', textOverflow: 'ellipsis',overflow: 'hidden'}}>{prod.descripcion}</p>
													</td>
													<td className="price" data-title="Price"><span>${prod.precio}</span></td>
													<td className="action" title="Eliminar de la lista de deseos" data-title="Remove"><a onClick={(e) => delFavoritos(e, prod)} href="#"><i className="ti-trash remove-icon"></i></a>
													&nbsp;&nbsp;
														<input checked={checks.includes(prod._id) ? true: false} onChange={() => handleCheck(prod._id)} type="checkbox" name="eliminar_seleccion" id="eliminar_seleccion" />
													</td>
												</tr>
											)
										}
									</tbody>
								</table> :
								status === 'checking' ?
									<Preloder/> :
									<h5>Aun no tienes productos en tu lista de deseos</h5>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default WishList
