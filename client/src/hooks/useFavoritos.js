//import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorito, saveFavoritoDB, delFavorito, delFavoritoDB, fetchAllFavoritos } from '../store/slices/favoritos'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'
import { useEffect } from 'react'

const useFavoritos = () => {

	const dispatch = useDispatch()
	const history = useHistory()
	const { favoritos, favoritosIDs, status } = useSelector(state => state.favoritos)
	const usuario = useSelector(state => state.usuario)

	useEffect(() => {
		if(usuario.user)
			dispatch(fetchAllFavoritos())
	}, [usuario.user])

	const addFavoritos = (e, producto) =>{
		if(e)	e.preventDefault()
		dispatch(addFavorito(producto))
		if(usuario.status === 'authenticated'){
			dispatch(saveFavoritoDB(producto))
		}
		toast('Producto agregado a tu lista de deseos', {
			position: 'bottom-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
		})
	}

	const delFavoritos = (e, producto) =>{
		if(e)	e.preventDefault()
		dispatch(delFavorito(producto))
		if(usuario.status === 'authenticated'){
			dispatch(delFavoritoDB(producto))
		}
		if(history.location.pathname === '/'){
			toast('Producto eliminado de tu lista de deseos', {
				position: 'bottom-right',
				autoClose: 1500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
			})
		}
	}

	return {
		addFavoritos,
		favoritosIDs,
		delFavoritos,
		status,
		favoritos
	}
}

export default useFavoritos
