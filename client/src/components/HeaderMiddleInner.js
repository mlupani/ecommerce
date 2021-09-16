import { useState } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import IconsBar from './IconsBar'
import {Navbar, Nav } from 'react-bootstrap'
import useDevice from '../hooks/useDevice'

const animatedComponents = makeAnimated()

const HeaderMiddleInner = () => {

	const { categorias } = useSelector(({categorias}) => categorias)
	const isMobile = useDevice()
	const [activeSearch, setActiveSearch] = useState(false)

	const customStyles = {
		container: provided => ({
			...provided,
			width: 150,
			height: 48,
		}),
		valueContainer: (provided) => ({
			...provided,
			height: 47,
			position: 'initial'
		}),
	}

	return (
		<div className="middle-inner">
			<div className="container">
				<div className="row">
					{
						isMobile &&
							<div className="col-lg-2 col-md-12 col-12">

								<Navbar style={{width: '100%', backgroundColor: 'white !important',display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}} bg="light" expand="lg">
									<div className="logo" style={{display: 'flex'}}>
										<a href="index.html"><img src="images/logo.png" alt="logo"/></a>
									</div>

									<IconsBar/>

									<div className={`search-top ${activeSearch ? 'active':''}`} style={{display: 'flex'}}>
										<div className="top-search"><a onClick={(e) => { e.preventDefault();setActiveSearch(!activeSearch)}} href="#0"><i style={{fontSize: `${isMobile ? '21px':'' }` }} className="ti-search"></i></a></div>

										<div className="search-top input">
											<form className="search-form">
												<input type="text" placeholder="Search here..." name="search"/>
												<button value="search" type="submit"><i className="ti-search"></i></button>
											</form>
										</div>

									</div>
									<Navbar.Toggle aria-controls="navbarScroll" />
									<Navbar.Collapse id="navbarScroll">
										<Nav
											className="mr-auto my-2 my-lg-0"
											style={{ maxHeight: '200px', marginLeft: '2px', fontWeight: 'bold', fontSize: '16px' }}
											navbarScroll
										>
											<ul>
												<li><Nav.Link style={{fontWeight: 'bold'}} href="#action1">Home</Nav.Link></li>
												<li><Nav.Link style={{fontWeight: 'bold'}} href="#action2">Productos</Nav.Link></li>
												<li><Nav.Link style={{fontWeight: 'bold'}} href="#" disabled>Contacto</Nav.Link>
												</li>
											</ul>
										</Nav>
									</Navbar.Collapse>
								</Navbar>
							</div>
					}

					{
						!isMobile &&
						<>
							<div className="col-lg-8 col-md-7 col-12">
								<div className="search-bar-top">
									<div className="search-bar" style={{display: 'flex', flexDirection: 'row',alignItems: 'center', marginLeft: '20%',zIndex: '99999'}}>
										{
											<Select
												styles={customStyles}
												components={animatedComponents}
												options={categorias.map(cat => {
													return {
														value: cat._id,
														label: cat.nombre
													}
												})}
											/>
										}
										<form>
											<input name="search" placeholder="Buscar productos" type="search"/>
											<button className="btnn"><i className="ti-search"></i></button>
										</form>
									</div>
								</div>
							</div>
							<IconsBar/>
						</>
					}
				</div>
			</div>
		</div>
	)
}

export default HeaderMiddleInner
