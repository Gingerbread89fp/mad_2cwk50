import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import Button from './app_components/button'
import styles from './styles/app_style'

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  getLogin(){
    return fetch('URL/login')
    .then((response) => response.json())
    .then((responseJson) =>{ 
      this.setState({
        email: this.state.email,
        password: this.state.password
      })
    })
    .catch((error)=>{console.log(error)})
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
        
        <Button 
          style={styles.button_style} 
          onPress={()=> this.getLogin()} 
          title='Login'/>
        
        <Text>Register now</Text>

      </View>
    )

  }



}

export default Login;