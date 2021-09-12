import axios from 'axios'

const productosAPI = axios.create({
	baseURL: 'http://localhost:8080/api'
})


export default productosAPI