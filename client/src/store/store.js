import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import productosReducer from '../reducers/productos'
import carritoReducer from '../reducers/carrito'
import thunk from 'redux-thunk'

export default createStore(combineReducers({productosReducer, carritoReducer}), composeWithDevTools(applyMiddleware(thunk)));