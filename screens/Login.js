import React, { Component } from 'react';
import { View, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import styles from '../styles/app_style'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user_id: '',
      isLoggedIn: false
    }
  }

  static navigationOptions= {
    header: null
  }

  login() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json", 'Accept': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            user_id: responseJson.id,
            token: responseJson.token,
            isLoggedIn: true
        });
        AsyncStorage.setItem('token', JSON.stringify(responseJson.token));
        AsyncStorage.setItem('userId', JSON.stringify(responseJson.id));
        AsyncStorage.setItem('login', JSON.stringify(this.state.isLoggedIn))
    })
    .then((response) => {Alert.alert('Logged in successfully')})
    .then((response) => this.props.navigation.navigate('Home'))
    .then((response) => this.getUserDetails())
    .catch((error) => {
      console.log(error)
      Alert.alert('Login Error', 'Email or password wrong. Please try again or register if you haven\'t signed up yet')
    })
  }

  getUserDetails(){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id)
    .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              given_name: responseJson.given_name,
              family_name: responseJson.family_name,
              email: responseJson.email
          });
          AsyncStorage.setItem('user', JSON.stringify(responseJson));
      })
      .catch((error) => {
          console.log(error);
      })
  }

  render() {
    return (
      <View style={styles.page_container}>
       
        <View style={styles.page_content}>
          
          <Image style={styles.image} source={require('../assets/images/appLogo.png')}/>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.login_input}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })} />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.login_input}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry={true} />

          <TouchableOpacity
            style={styles.button_style}
            accessible={true}
            accessibilityLabel='Click to login'
            onPress={() => this.login()}>
            <Text>LOGIN</Text>
          </TouchableOpacity>

          <Text onPress={() => this.props.navigation.navigate('Register')} >Register now</Text>
        </View>

      </View>
    )

  }



}

export default Login;