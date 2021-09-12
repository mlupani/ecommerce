import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useCarrito from '../hooks/useCarrito'
import useDevice from '../hooks/useDevice'

const TrendingTabs = () => {

	const { addCarrito } = useCarrito()
	const trendings = useSelector(({productos}) => productos.trendings)
	const [categoriaActive, setCategoriaActive] = useState(null)
	const { categorias } = useSelector(({categorias}) => categorias )
	const isMobile = useDevice()

	useEffect(() => {
		if(categorias.length)
			setCategoriaActive(categorias[0]._id)
	}, [categorias])

	const handleActiveTabs = (e,catID) => {
		e.preventDefault()
		setCategoriaActive(catID)
	}

	return (
		<div className="row">
			<div className="col-12">
				<div className="product-info">
					<div className="nav-main">
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							{
								categorias.map(cat => <li key={cat._id} className="nav-item"><a onClick={(e) => handleActiveTabs(e, cat._id)} className={`nav-link ${categoriaActive === cat._id ? 'active' : ''}`} data-toggle="tab" href="#man" role="tab">{cat.nombre}</a></li>)
							}
						</ul>
					</div>
					<div className="tab-content" id="myTabContent">
						{
							categorias.map(cat => {
								return <div key={cat._id} className={`tab-pane fade ${categoriaActive === cat._id ? 'show active' : ''}`} id="man" role="tabpanel">
									<div className="tab-single">
										<div className="row">
											{
												trendings.map(prodsArr => {
													return prodsArr.map(prod => {
														return prod.categoria._id === cat._id &&
																	<div key={prod._id} className="col-xl-3 col-lg-3 col-md-3 col-12" style={{maxHeight: '700px'}}>
																		<div className="single-product" >
																			<div className="product-img" style={{minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
																				<a href="product-details.html">
																					<img style={{width: `${!isMobile ? '70%':'50%' }`, marginLeft: `${isMobile ? '25%':'0px'}`}} className="default-img" src={prod.img} alt="#"/>
																					<img style={{width: `${!isMobile ? '70%':'50%' }`, marginLeft: `${isMobile ? '25%':'0px'}`}}  className="hover-img" src={prod.img} alt="#"/>
																				</a>
																				<div style={{bottom: `${isMobile ? '0px':''}`}} className="button-head">
																					<div className="product-action">
																						<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Ver producto</span></a>
																						<a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Agregar a lista de deseos</span></a>
																					</div>
																					<div className="product-action-2">
																						<a onClick={(e) => addCarrito(e, prod)} title="Agregar al carrito" href="#">Agregar al carrito</a>
																					</div>
																				</div>
																			</div>
																			<div className="product-content" style={{textAlign:'center'}}>
																				<h3><a href="product-details.html">{prod.nombre}</a></h3>
																				<div className="product-price">
																					<span><b>$ {prod.precio}</b></span>
																				</div>
																			</div>
																		</div>
																	</div>

													})
												})
											}
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>
		</div>
	)
}

export default TrendingTabs
