import CakeContainer from './RComponents/CakeContainer'
import IceCreamContainer from './RComponents/IceCreamContainer'
import HooksCakeContainer from './RComponents/HooksCakeContainer'
import HookIceCreamContainer from './RComponents/HooksIceCreamContainer'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
      <HooksCakeContainer />
      <HookIceCreamContainer />
    </Provider>
  );
}

export default App;
