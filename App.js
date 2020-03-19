import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Octicons from 'react-native-vector-icons/Octicons';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';
import NewChits from './screens/NewChits';
import EditDraft from './screens/EditDraft';
import Camera from './screens/Camera';
import UpdateProfile from './screens/UpdateProfile';

const AppNavigator = createBottomTabNavigator({
  Search:{
    screen: Search,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(<Octicons name='search' size={30} color={tintColor} />)
    }
  },
  Home: {
    screen: createStackNavigator({
      Home,
      NewChits,
      Camera,
      EditDraft,
      Login,
      Register,
    }),
    navigationOptions:{
      tabBarIcon:({tintColor})=>(<Octicons name='home' size={30} color={tintColor} />) 
    }
  },
  Profile:{
    screen: createStackNavigator({
      Profile,
      UpdateProfile,
    }),
    navigationOptions:{
      tabBarIcon:({tintColor})=>(<Octicons name='person' size={30} color={tintColor} />) 
    }
  }
}, 
{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#1F5673',
    inactiveTintColor: '#B9B8D3',
  }
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;