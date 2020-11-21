import CakeContainer from './RComponents/CakeContainer'
import IceCreamContainer from './RComponents/IceCreamContainer'
import HooksCakeContainer from './RComponents/HooksCakeContainer'
import HookIceCreamContainer from './RComponents/HooksIceCreamContainer'
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import ItemContainer from './RComponents/ItemContainer'
import NewCakeContainer from './RComponents/NewCakeContainer'
import UserContainer from './RComponents/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <IceCreamContainer />
      <HooksCakeContainer />
      <HookIceCreamContainer />

      <ItemContainer />
      <NewCakeContainer />
      <UserContainer />
    </Provider>
  );
}

export default App;
