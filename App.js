import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


//import BottomNavigation from './screens/ScreenNavigation';
import Login from './screens/Login';
import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: createBottomTabNavigator({
      Search: {
        screen: Search,
        BottomTabNavigatorConfig:{
          tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'blue',
            },
          }
        }
      },
      Home: {
        screen: Home,
        order:1
      },
      Profile: {
        screen: Profile
      }
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;