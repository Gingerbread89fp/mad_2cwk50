import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//import BottomNavigation from './screens/ScreenNavigation';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';
import NewChits from './screens/NewChits';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    })
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      title: 'Registration page',
    })
  },
  Home: {
    screen: createBottomTabNavigator({
      Search: {
        screen: Search
      },
      Home: {
        screen: createStackNavigator({
          Home: {
            screen: Home
          },
          NewChits: {
            screen: NewChits,
            navigationOptions: () => ({
              title: 'New Chit',
            })
          }
        })
      },
      Profile: {
        screen: Profile
      },
    }),
    navigationOptions: () => ({
      header: null
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;