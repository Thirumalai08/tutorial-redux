import CakeContainer from './RComponents/CakeContainer'
import IceCreamContainer from './RComponents/IceCreamContainer'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  );
}

export default App;
