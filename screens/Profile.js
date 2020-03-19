import React, { Component } from 'react';
import { Text, View, Image, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PhotoUpload from 'react-native-photo-upload';

import CustomIcon from '../app_components/customizedIconButton';

import styles from '../styles/profile_style'

const default_avatar= require('../assets/images/default_user.png')

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user_id: '',
      user_details: [],
      followers: [],
      followings: [],
      profile_pic:'',
      
    }
  }

  static navigationOptions={
    header: null
  }

  logout() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/logout')
      .then((response) => {
        Alert.alert('Logged out successfully');
        //clear the storage to avoid persistency of data after logout
        AsyncStorage.removeItem('token') 
        AsyncStorage.removeItem('userId')
        AsyncStorage.removeItem('user')
        AsyncStorage.removeItem('login')
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
        AsyncStorage.getItem('token', (err, result) =>{
          this.setState({ token: result });
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
    .then(() => this.getProfilePicture())
    .then(() => this.getFollowers())
    .then(() => this.getFollowing())
  }

  getProfilePicture(){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id+'/photo')
    .then((response) =>{
      if(!response.status === 404 || !response.status === 500){
        this.setState({
          profile_pic: response.url
        })
      }
    })
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
              color={'#1F5673'} 
              accessibilityLabel='remove user from followers/following list'
              onPress={() => this.unFollowUser(item.user_id)}/>
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
          Alert.alert('Successful Action', 'user unfollowed successfully')  
      })
      .then(()=>{
        this.getFollowers();
        this.getFollowing();
      })
      .catch((error)=>{
      console.log(error)
      })
  }

  uploadProfilePicture(img_selected){
    return fetch('http://10.0.2.2:3333/api/v0.0.5/user/photo', {
      method: 'POST',
      headers: { 
          "Content-Type": "image/jpeg", 
          "X-Authorization": JSON.parse(this.state.token)
      },
      body: img_selected
    })
    .then((response) => {
        Alert.alert('Successful Action', 'Picture uploaded correctly') 
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  componentDidMount() {
    this.getUserDetails();
    this.getFollowers();
    this.getFollowing();
  }
  

  render() {
    const {given_name, family_name, email} = this.state.user_details
    return (
      <View style={{backgroundColor: '#B9B8D3'}} accessible={true}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.icon_header}>  
            <CustomIcon
                name={'account-edit'}
                size={40}
                color={'#1F5673'}
                accessibilityLabel='edit profile'
                onPress={() => this.props.navigation.navigate('UpdateProfile')}
            />
            <CustomIcon
              name={'logout'}
              size={40}
              color={'#1F5673'}
              accessibilityLabel='logout'
              onPress={() => this.logout()}
            />
          </View>
        </View>

        <View style={styles.page_container}>

          <View style={styles.page_content}>
             <PhotoUpload 
                  photoPickerTitle={'Select an image'}
                  format={'JPEG'}
                  quality={70}
                  onPhotoSelect={img_selected =>{
                    if(img_selected){
                      this.uploadProfilePicture(img_selected)
                    }
                  }}
                >
                  <Image 
                      style={styles.image_profile} 
                      //if a profile pic is set than use that one otherwise keep the default image  
                      source={this.state.profile_pic ? {uri: this.state.profile_pic} : default_avatar}
                    />
                </PhotoUpload>

                <Text style={styles.user_details_font}>First Name: {given_name}</Text>
                <Text style={styles.user_details_font}>Last Name: {family_name}</Text>
                <Text style={styles.user_details_font}>Email: {email}</Text>        

          </View>

            <View style={styles.profile_follow}>
              <Text style={styles.follow_title}>Followers ({this.state.followers.length})</Text>
              <FlatList
                extraData={this.state}
                data={this.state.followers}
                renderItem={({ item, index }) => this.displayData(item)}
                keyExtractor={({ item}, index) => 'followers-list'+index}
              />
            </View>
            
            <View style={styles.profile_follow}>
              <Text style={styles.follow_title}>Following ({this.state.followings.length})</Text>
              <FlatList
                extraData={this.state}
                data={this.state.followings}
                renderItem={({ item, index }) => this.displayData(item)}
                keyExtractor={({ item}, index) => 'following-list'+index}
              />
            </View>
          </View>
        </View>

   
    )
  }
}

export default Profile;