import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/slices/usuario'
import { countryList } from '../data/countries'
import { useForm } from '../hooks/useForm'

const FormSignUp = ({email,  password}) => {

	const dispatch = useDispatch()

	const { form, onChange } = useForm({
		name: '',
		lastname: '',
		number: '',
		address: '',
		pais: 'asdasd',
		ciudad: 'asdasd',
		imagen: null
	})

	const handleSignUp = (e) => {
		e.preventDefault()
		const { name, lastname, number, pais, ciudad, address, imagen } = form
		dispatch(signUp({name, email, password, apellido: lastname, telefono: number, pais, ciudad, address, imagen}))
	}

	return (
		<form onSubmit={handleSignUp} className="form" method="post" action="#" style={{height: '600px'}}>
			<br></br>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12">
					<div className="form-group">
						<label>Nombre<span>*</span></label>
						<input onChange={(e) => onChange(e.target.value, 'name')} type="text" name="name" placeholder="" required="required"/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<div className="form-group">
						<label>Apellido<span>*</span></label>
						<input onChange={(e) => onChange(e.target.value, 'lastname')} type="text" name="lastname" placeholder="" required="required"/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<div className="form-group">
						<label>Telefono<span>*</span></label>
						<input onChange={(e) => onChange(e.target.value, 'number')} type="text" name="number" placeholder="" required="required"/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<div className="form-group" >
						<label>Direccion<span>*</span></label>
						<input onChange={(e) => onChange(e.target.value, 'address')} type="text" name="address" placeholder="" required="required"/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<div style={{marginBottom: '1rem'}}>
						<label>Pais<span>*</span></label>
						<Select
							className="basic-single"
							options={countryList.map((val) => {
								return {
									value: val,
									label: val
								}
							})}
						/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<div style={{marginBottom: '1rem'}}>
						<label>Ciudad<span>*</span></label>
						<Select
							options={['Los Angeles','Chicago', 'Houston', 'San Diego', 'Dallas','Charlotte'].map((val) => {
								return {
									value: val,
									label: val
								}
							})}
						/>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<div>
						<label>Imagen de perfil</label>
						<br></br>
						<input onChange={(e) => onChange(e.target.value, 'imagen')} type="file" name="imagen" id="" />
					</div>
				</div>
				<br></br>
				<div style={{display: 'flex', justifyContent: 'center'}} className="col-lg-12 col-md-12 col-12">
					<div className="form-group">
						<button style={{width: '100%'}} className="btnn" value="search" type="submit">Crear cuenta</button>
					</div>
				</div>
			</div>
		</form>
	)
}

export default FormSignUp
