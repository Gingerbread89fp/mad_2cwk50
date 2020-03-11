import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomIcon from './app_components/customizedIconButton';

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
      //tabBarIcon:()=>(<CustomIcon name='magnify' size={32} color='#1F5673' onPress={() => this.props.navigation.navigate('Search')}/>)
    }
  },
  Home: {
    screen: createStackNavigator({
      Home,
      NewChits,
      Camera,
      EditDraft,
      Login,
      Register
    }),
    navigationOptions:{
      //tabBarIcon:()=>(<CustomIcon name='home-circle' size={32} color='#1F5673' />) 
    }
  },
  Profile:{
    screen: createStackNavigator({
      Profile,
      UpdateProfile
    }),
    navigationOptions:{
      //tabBarIcon:()=>(<CustomIcon name='account-circle-outline' size={32} color='#1F5673' />) 
    }
  }
}, 
{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#1F5673',
    inactiveTintColor: '#B9B8D3',
    labelStyle: {
      fontSize: 12,
    },
}
  
});


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;