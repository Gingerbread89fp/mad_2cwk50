import React, { Component } from 'react';
import { Text, View, Image, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PhotoUpload from 'react-native-photo-upload';

import CustomIcon from '../app_components/customizedComponents';

import styles from '../styles/app_style'

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      user_details: [],
      followers: [],
      followings: []
    }
  }

  static navigationOptions={
    header: null
  }

  logout() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/logout')
      .then((response) => {
        Alert.alert("Logged out successfully ");
        AsyncStorage.clear() //clear the storage to avoid persistance of data especially the token
      })
      .then((response) => this.props.navigation.navigate('Login'))
      .catch((error) => {
        console.log(error)
      })
  }

  async getUserDetails() {
    await AsyncStorage.getItem('userId', (err, result) => {
      if (result != null) {
        this.setState({ user_id: result });
        AsyncStorage.getItem('user', (err, result_details) => {
          this.setState({ user_details: JSON.parse(result_details) })
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
    .then(() => this.getFollowers())
    .then(() => this.getFollowing())
  }

  getFollowers() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id+'/followers')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          followers: responseJson
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getFollowing() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id+'/following')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          followings: responseJson,
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  displayData(item) {
    return (
        <View style={{flexDirection:'row'}}>
            <Text style={styles.name_follow}>{item.given_name}</Text>
            <CustomIcon 
              name={'account-minus'} 
              size={28} 
              color={'green'} 
              onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                  this.setState({ token: result });
                  this.unFollowUser(item.user_id)
              })}/>
        </View>
    )
  }

  unFollowUser(user_id){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+user_id+'/follow', {
        method: 'DELETE',
        headers: { 
            "Content-Type": "application/json", 
            "X-Authorization": JSON.parse(this.state.token)
        }})
      .then((response) => {
          Alert.alert("user unfollowed successfully ")  
      })
      .catch((error)=>{
      console.log(error)
      })
  }

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <View>
        <View style={styles.page_container}>
          <Text style={styles.page_title}>Profile</Text>

          <CustomIcon
            name={'logout'}
            size={40}
            color={'green'}
            onPress={() => this.logout()}
          />
        </View>

        <View style={styles.page_container}>
          <CustomIcon
              name={'account-edit'}
              size={40}
              color={'green'}
              onPress={() => this.props.navigation.navigate('UpdateProfile')}
          />
        </View>

        <View style={styles.page_content}>
            <Image 
              style={styles.image_profile} 
              source={require('../assets/images/default_user.png')}
            />
          
          <View>
            <Text style={styles.user_details}>First Name: {this.state.user_details.given_name}</Text>
            <Text style={styles.user_details}>Last Name: {this.state.user_details.family_name}</Text>
            <Text style={styles.user_details}>Email: {this.state.user_details.email}</Text>        
          </View>
        </View>

          <View style={styles.profile_follow}>
            <Text style={styles.follow_title}>Followers ({this.state.followers.length})</Text>
            <FlatList
            data={this.state.followers}
            renderItem={({ item, index }) => this.displayData(item)}
            keyExtractor={({ item}, index) => 'followers-list'+index}
            />
          </View>
          
          <View style={styles.profile_follow}>
            <Text style={styles.follow_title}>Following ({this.state.followings.length})</Text>
            <FlatList
              data={this.state.followings}
              renderItem={({ item, index }) => this.displayData(item)}
              keyExtractor={({ item}, index) => 'following-list'+index}
            />
          </View>
        </View>
   
    )
  }
}

export default Profile;