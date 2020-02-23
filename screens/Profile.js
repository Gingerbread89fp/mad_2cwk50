import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';

import styles from '../styles/app_style'

class Profile extends Component {

    logout(){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/logout')
        .then((response) => {
          Alert.alert("Logged out successfully ")
        })
        .then((response)=> this.props.navigation.navigate('Login'))
        .catch((error)=>{
          console.log(error)
        })
      }



    render() {
        return (
            <View>
                <Text>Profile page</Text>
                <TouchableOpacity
                    style={styles.button_style}
                    onPress={() => this.logout()}>
                    <Text>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Profile;