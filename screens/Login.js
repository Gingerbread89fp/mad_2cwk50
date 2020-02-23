import React, { Component } from 'react';
import { View, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native';

import styles from '../styles/app_style'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  login(){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/login', {
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
    .then((response)=> this.props.navigation.navigate('Home'))
    .catch((error)=>{
      console.log(error)
    })
  }

  render(){
    return(
      <View style={{flex:1, flexDirection:'column', alignItems:'center', backgroundColor:''}}>

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
        
        <TouchableOpacity 
          style={styles.button_style} 
          onPress={()=> this.login()}>
            <Text>LOGIN</Text>
        </TouchableOpacity>
        
        <Text onPress={()=> this.props.navigation.navigate('Register')} >Register now</Text>

      </View>
    )

  }



}

export default Login;