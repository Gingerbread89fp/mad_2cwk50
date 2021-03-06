import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import CustomFormInput from '../app_components/inputField'

import styles from '../styles/form_style'

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
        given_name: '',
        family_name: '',
        email: '',
        password: ''
    }
  }

  static navigationOptions={
    title: 'Registration page',
    headerTitleStyle: styles.title,
    headerStyle: {height: 64},
  }

  register(){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user', {
      method: 'POST',
      headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
      body: JSON.stringify({
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      Alert.alert('Registered successfully')
    })
    .then((response) => { this.props.navigation.navigate('Login')})
    .catch((error)=>{
      console.log(error)
    })
  }

  render(){
    return(
      <View style={styles.page} accessible={true}>

        <View style={styles.page_container}>
          <View style={styles.page_content}>

            <CustomFormInput 
                labelTitle={'First Name:'}
                value={this.state.given_name}
                onChangeText={(given_name) => this.setState({given_name})}
            />

            <CustomFormInput 
                labelTitle={'Last Name:'}
                value={this.state.family_name}
                onChangeText={(family_name)=>this.setState({family_name})}
            />

            <CustomFormInput 
                labelTitle={'Email:'}
                value={this.state.email}
                onChangeText={(email)=>this.setState({email})}
            />

            <CustomFormInput 
                labelTitle={'Password:'}
                value={this.state.password}
                onChangeText={(password)=>this.setState({password})}
                secureTextEntry={true}
            />
            
            <TouchableOpacity
              style={styles.button_style} 
              accessibilityLabel='click to register'
              onPress={()=> this.register()}>
                  <Text>SIGNUP</Text>
            </TouchableOpacity>
          </View>

          </View>
      </View>
    )

  }



}

export default Register;