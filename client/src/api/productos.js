import axios from 'axios'

const productosAPI = axios.create({
	baseURL: process.env.REACT_APP_API_HOST
})


export default productosAPI