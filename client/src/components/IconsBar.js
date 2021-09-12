import { useSelector } from 'react-redux'
import ShoppingItem from './ShoppingItem'
import useDevice from '../hooks/useDevice'


const IconsBar = () => {

	const { cantidad } = useSelector(({carrito}) => carrito)
	const isMobile = useDevice()
	
	return (
		<div className={`${!isMobile ? 'col-lg-2 col-md-3 col-12':''} `}>
			<div className="right-bar" style={{display:'inline-block', position: `${!isMobile ? 'relative':'initial'}`}}>
				{
					!isMobile &&
						<>
							<div className="sinlge-bar">
								<a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
							</div>
							<div className="sinlge-bar">
								<a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
							</div>
						</>
				}
				<div className="sinlge-bar shopping">
					{
						<p href="#" className="single-icon">
							<i style={{fontSize: `${isMobile ? '25px':'' }` }} className="ti-shopping-cart"></i>
							{
								cantidad ?
									<span className="total-count">{cantidad}</span> : ''
							}
						</p>
					}
					<ShoppingItem/>
				</div>
			</div>
		</div>
	)
}

export default IconsBar