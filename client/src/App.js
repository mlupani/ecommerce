import store from './store/store'
import { Provider } from 'react-redux'
import ListaProductos from './components/ListaProductos'
import Carrito from './components/Carrito';

function App() {

  return (
    <Provider store={store}>
        <div className="row">
          <div className="row col-md-12">
            <ListaProductos/>
            <Carrito/>
          </div>
        </div>
    </Provider>
  );
}
export default App;
