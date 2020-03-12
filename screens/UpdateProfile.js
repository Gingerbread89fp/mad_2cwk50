import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import CustomFormInput from '../app_components/inputField'

import styles from '../styles/form_style'
import AsyncStorage from '@react-native-community/async-storage';

class UpdateProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
        token:'',
        given_name: '',
        family_name: '',
        email: '',
        password: '',
        user_id: ''
    }
  }

  static navigationOptions={
    title: 'Update details',
    headerTitleStyle: styles.title,
    headerStyle: {height: 64},
  }

  getUserDetails() {
    AsyncStorage.getItem('token', (err, result) => {
     this.setState({ token: result });
        AsyncStorage.getItem('user', (err, result_details) => {
            this.setState({ 
                user_id: JSON.parse(result_details).user_id,
                given_name: JSON.parse(result_details).given_name,
                family_name: JSON.parse(result_details).family_name,
                email: JSON.parse(result_details).email
            })
        })
    })
  }

  updateProfile(){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id, {
      method: 'PATCH',
      headers: { 
          "Content-Type": "application/json", 
          "X-Authorization": JSON.parse(this.state.token) 
        },
      body: JSON.stringify({
        given_name: this.state.given_name,
        family_name: this.state.family_name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      Alert.alert("Details updated successfully")
    })
    //re fetch the new user details so to be able to update the storage details
    .then(() => {return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id)})
    .then((response) => response.json())
    .then((responseJson)=>{
        AsyncStorage.setItem('user', JSON.stringify(responseJson))
    })
    .then((response) => {this.props.navigation.navigate('Profile')})
    .catch((error)=>{
      console.log(error)
    })
  }

  componentDidMount() {
    this.getUserDetails();
  }

  render(){
    return(
      <View style={styles.page}>

        <View style={styles.page_container}>
          <View style={styles.page_content}>

            <CustomFormInput 
                labelTitle={'First Name:'}
                value={this.state.given_name}
                placeholder={this.state.given_name}
                onChangeText={(given_name) => this.setState({given_name})}
            />

            <CustomFormInput 
                labelTitle={'Last Name:'}
                value={this.state.family_name}
                placeholder={this.state.family_name}
                onChangeText={(family_name)=>this.setState({family_name})}
            />

            <CustomFormInput 
                labelTitle={'Email:'}
                value={this.state.email}
                placeholder={this.state.email}
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
              onPress={()=> this.updateProfile()}>
                  <Text>UPDATE DETAILS</Text>
            </TouchableOpacity>
          </View>

          </View>
      </View>
    )

  }



}

export default UpdateProfile;