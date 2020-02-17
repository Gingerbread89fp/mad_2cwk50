import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  input:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    width: 300
  }
})

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }


  getLogin(){
    return fetch('URL/login')
    .then((response) => response.json())
    .then((responseJson) =>{ 
      this.setState
      })
    .catch((error)=>{console.log(error)})
  }

  render(){

    return(
      <View>
        <Text>User name:</Text>
        <TextInput style={styles.input} />

        <Text>Password:</Text>
        <TextInput style={styles.input} />


        <Text>Register now</Text>

      </View>
    )

  }



}