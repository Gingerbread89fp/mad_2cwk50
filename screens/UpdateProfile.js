import React, { Component } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';

import styles from '../styles/app_style'
import AsyncStorage from '@react-native-community/async-storage';

class UpdateProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
        given_name: '',
        family_name: '',
        email: '',
        password: '',
        user_id: ''
    }
  }

  static navigationOptions={
    title: 'Update details',
    headerTitleStyle: styles.page_title,
    headerStyle: {height: 64, marginBottom: 12},
  }

  async updateProfile(){
    await AsyncStorage.getItem('userId', (err, result)=>{
        this.setState({ user_id: result });
    })
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+user_id, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
      body: JSON.stringify({
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      Alert.alert("Registered successfully")
    })
    .then((response) => { this.props.navigation.navigate('Login')})
    .catch((error)=>{
      console.log(error)
    })
  }

  render(){
    return(
      <View style={styles.details_form}>

        <Text style={styles.label}>Name:</Text>
        <TextInput 
          style={styles.form_input} 
          value={this.state.given_name} 
          onChangeText={(given_name)=>this.setState({given_name})}/>


        <Text style={styles.label}>Last Name:</Text>
        <TextInput 
          style={styles.form_input} 
          value={this.state.family_name} 
          onChangeText={(family_name)=>this.setState({family_name})}/>

        <Text style={styles.label}>Email:</Text>
        <TextInput 
          style={styles.form_input} 
          value={this.state.email} 
          onChangeText={(email)=>this.setState({email})}/>

        <Text style={styles.label}>Password:</Text>
        <TextInput 
          style={styles.form_input} 
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}/>
        
        <TouchableOpacity
          style={styles.button_style} 
          onPress={()=> this.updateProfile()}>
              <Text>UPDATE DETAILS</Text>
        </TouchableOpacity>

      </View>
    )

  }



}

export default UpdateProfile;