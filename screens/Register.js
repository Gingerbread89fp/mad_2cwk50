import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CustomButton from '../app_components/button'
import styles from '../styles/app_style'

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        lastname: '',
        email: '',
        password: ''
    }
  }

  register(){
    return fetch('URL/user', {
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

  render(){
    return(
      <View style={{flex:1, flexDirection:'column', alignItems:'flex-start'}}>

        <Text style={styles.label}>Name:</Text>
        <TextInput 
          style={styles.input} 
          value={this.state.name} 
          onChangeText={(name)=>this.setState({name})}/>


        <Text style={styles.label}>Last Name:</Text>
        <TextInput 
          style={styles.input} 
          value={this.state.lastname} 
          onChangeText={(lastname)=>this.setState({lastname})}/>

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
          onPress={()=> this.register()} 
          title='Signup'/>

      </View>
    )

  }



}

export default Register;