import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CustomButton from '../app_components/button'
import styles from '../styles/app_style'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  getHomePage(){
    /* return fetch('URL/login')
    .then((response) => response.json())
    .then((responseJson) =>{ 
      this.setState({
        email: this.state.email,
        password: this.state.password
      })
    })
    .catch((error)=>{console.log(error)}) */
  }

  sendloginCredential(){
    return fetch('URL/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      Alert.alert("Logged in successfully ")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>

        <Image style={styles.image}></Image>

        <Text style={styles.label}>Email:</Text>
        <TextInput 
          style={styles.input} 
          value={this.state.email} 
          onChangeText={(email)=>this.setState({email})}/>

        <Text style={styles.label}>Password:</Text>
        <TextInput 
          style={styles.input} 
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}/>
        
        <CustomButton 
          style={styles.button_style} 
          onPress={()=> this.props.navigation.navigate('Home')} 
          title='Login'/>
        
        <Text>Register now</Text>

      </View>
    )

  }



}

export default Login;