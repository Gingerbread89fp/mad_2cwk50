import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './screens/Home';
import Login from './screens/Login';
import Search from './screens/Search';

const AppNavigator = createStackNavigator({
  Splash: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  Search: {
    screen: Search
  }
});

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;