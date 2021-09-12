import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useHeaderScroll from '../hooks/useHeaderScroll'
import ShoppingItem from './ShoppingItem'

const HeaderInner = () => {

	const headerScroll = useHeaderScroll()
	const { categorias } = useSelector(({categorias}) => categorias)
	const { cantidad } = useSelector(({carrito}) => carrito)

	useEffect(() => {
		
	}, [])

	return (
		<div className="header-inner">
			<div className="container">
				<div className="cat-nav-head">
					<div className="row">
						<div className="col-lg-3">
							<div className="all-category">
								<h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIAS</h3>
								<ul className="main-category">
									{
										categorias.map(cat => <li key={cat._id}><a href="#">{cat.nombre}</a></li>)
									}
								</ul>
							</div>
						</div>
						<div className="col-lg-9 col-12">
							<div className="menu-area">
								<nav className="navbar navbar-expand-lg">
									<div className="navbar-collapse">	
										<div className="nav-inner ">	
											<ul className="nav main-menu menu navbar-nav">
												<li className="active"><a className="enlaces_header" href="#">Home</a></li>
												<li><a className="enlaces_header" href="#">Productos</a></li>
												<li><a className="enlaces_header" href="contact.html">Contacto</a></li>
												{
													headerScroll &&
															<li>
																<div className="sinlge-bar shopping">
																	{
																		<a href="#" className="single-icon enlaces_header" style={{fontSize: '25px !important'}}>
																			<i style={{fontSize: '25px'}} className="ti-shopping-cart"></i>
																			{
																				cantidad ?
																					<span style={{position: 'absolute',right: '-8px', top: '23px'}} className="total-count">{cantidad}</span> : ''
																			}
																		</a>
																	}
																	<ShoppingItem/>
																</div>
															</li>
												}
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderInner
