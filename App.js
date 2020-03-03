import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';
import NewChits from './screens/NewChits';
import Camera from './screens/Camera';
import UpdateProfile from './screens/UpdateProfile';

const AppNavigator = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator({
      Search,
      Home: {
        screen: createStackNavigator({
          Home,
          NewChits,
          Camera,
          Login,
          Register
        })
      },
      Profile:{
        screen: createStackNavigator({
          Profile,
          UpdateProfile
        })
      }
    }, 
    {
      initialRouteName: 'Home'
    }),
    navigationOptions: () => ({
      header: null
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;