import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
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
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    width: 300
  },

  image:{
    width: 256, 
    height: 256, 
    borderRadius: 100, 
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    marginBottom: 20
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
      <View style={{flex:1, flexDirection:'column', alignItems:'center'}}>

        <Image style={styles.image}></Image>

        <Text>User name:</Text>
        <TextInput style={styles.input} 
          value={this.state.username} 
          onChangeText={(username)=>this.setState(username)}/>

        <Text>Password:</Text>
        <TextInput style={styles.input} value={this.state.password}/>

        <Text>Log-in</Text>
        <Text>Register now</Text>

      </View>
    )

  }



}

export default Login;