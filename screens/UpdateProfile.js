import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import CustomFormInput from '../app_components/form'

import styles from '../styles/app_style'
import AsyncStorage from '@react-native-community/async-storage';

class UpdateProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
        //given_name: '',
        family_name: '',
        //email: '',
        //password: '',
        user_id: '',
        user_details: []
    }
  }

  static navigationOptions={
    title: 'Update details',
    headerTitleStyle: styles.page_title,
    headerStyle: {height: 64, marginBottom: 12},
  }

  async getUserDetails() {
    await AsyncStorage.getItem('userId', (err, result) => {
      if (result != null) {
        this.setState({ user_id: result });
        console.log('**** user_id', this.state.user_id)
        AsyncStorage.getItem('user', (err, result_details) => {
          this.setState({ 
              user_details: JSON.parse(result_details),
              family_name: this.state.user_details.family_name
            })
            console.log("**** family name ", this.state.family_name)
        })
      }
      else { 
        const { navigation } = this.props;
        Alert.alert(
          'Login error',
          'Please login to view your profile',
          [{text: 'Ok', onPress: () => navigation.navigate('Home')}]
        )
      }
    })
    //.then(() => this.updateProfile())
  }

  updateProfile(){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
      body: JSON.stringify({
        //given_name: this.state.given_name,
        family_name: this.state.family_name,
        //email: this.state.email,
        //password: this.state.password
      })
    })
    .then((response) => {
      Alert.alert("Details updated successfully")
    })
    .then((response) => { this.props.navigation.navigate('Profile')})
    .catch((error)=>{
      console.log(error)
    })
  }

  render(){
    return(
      <View style={styles.details_form}>

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
        />
        
        <TouchableOpacity
          style={styles.button_style} 
          onPress={()=> this.getUserDetails()}>
              <Text>UPDATE DETAILS</Text>
        </TouchableOpacity>

      </View>
    )

  }



}

export default UpdateProfile;