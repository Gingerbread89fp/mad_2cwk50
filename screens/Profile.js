import React, { Component } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import CustomIcon from '../app_components/customizedComponents';

import styles from '../styles/app_style'

class Profile extends Component {

  logout() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/logout')
      .then((response) => {
        Alert.alert("Logged out successfully ");
        AsyncStorage.clear()
      })
      .then((response) => this.props.navigation.navigate('Login'))
      .catch((error) => {
        console.log(error)
      })
  }



  render() {
    return (
      <View>
        <View style={styles.page_container}>
          <Text style={styles.page_title}>Profile</Text>

          <CustomIcon
            name={'md-log-out'}
            size={40}
            color={'green'}
            onPress={() => this.logout()}
          />
        </View>

        <View style={styles.page_content}>
          <Image style={styles.image_profile} ></Image>
          <View>
            <Text style={styles.label}>First Name:</Text>
            <Text style={styles.label}>Last Name:</Text>
            <Text style={styles.label}>Email:</Text>
          </View>
        </View>

        <View style={styles.page_container}>
          <Text style={styles.page_title}>Followers</Text>
          <Text style={styles.page_title}>Following</Text>
        </View>

      </View>
    )
  }
}

export default Profile;