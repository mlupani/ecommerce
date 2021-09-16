import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { signIn } from '../store/slices/usuario'
import FormSignUp from './FormSignUp'
import { useHistory } from 'react-router'

const FormSignIn = () => {

	const dispatch = useDispatch()
	const history = useHistory()

	const { form, onChange } = useForm({
		email: '',
		password: '',
		checkCrear: null
	})

	const handleSignIn = (e) => {
		e.preventDefault()
		dispatch(signIn(form.email, form.password))
		history.push('/')
	}

	return (
		<div className="shopping-cart section" style={{paddingTop: '0px'}}>
			<div className="container">
				<form onSubmit={handleSignIn} className="form" method="post" action="#">
					<div className="row" style={{justifyContent:'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
						<div className="row">
							<div className="col-lg-12 col-md-12 col-12">
								<div className="form-group">
									<label>Email<span>*</span></label>
									<input type="text" onChange={(e) => onChange(e.target.value,'email')} name="email" placeholder="" required="required"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-12 col-12">
								<div className="form-group">
									<label>Password<span>*</span></label>
									<input type="password" onChange={(e) => onChange(e.target.value,'password')} name="password" placeholder="" required="required"/>
								</div>
							</div>
						</div>
						{
							!form.checkCrear ?
								<div className="col-lg-2 col-md-2 col-2">
									<div className="form-group">
										<button style={{position: 'relative', width: '100%'}} className="btnn" value="search" type="submit"> { form.checkCrear ? 'Crear cuenta': 'Ingresar'}</button>
									</div>
								</div> : ''
						}
						<div style={{display: 'flex', justifyContent: 'center'}} className="col-lg-12 col-md-5 col-12">
							<div className="left">
								<div className="checkbox">
									<label className={`checkbox-inline ${form.checkCrear ? 'checked':''}`} htmlFor="2">
										<input name="checkCrear" onChange={(e) => onChange(e.target.checked,'checkCrear')} id="2" type="checkbox"/> &nbsp; Crear cuenta
									</label>
								</div>
							</div>
						</div>
					</div>
				</form>

				{
					form.checkCrear &&
						<FormSignUp email={form.email} password={form.password} />
				}
			</div>
		</div>
	)
}

export default FormSignIn
