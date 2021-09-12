import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style/globals.css'
import './style/reset.css'
import './style/themify-icons.css'
import './style/font-awesome.css'
import './style/animate.css'
import './style/responsive.css'
import './style/slicknav.min.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
