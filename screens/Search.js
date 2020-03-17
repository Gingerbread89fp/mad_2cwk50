import React, { Component } from 'react';
import { Text, View, TextInput, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/search_style';
import CustomIcon from '../app_components/customizedIconButton';

class Search extends Component{

    constructor(props) {
        super(props);
        this.state = {
            input_text: '',
            token:'',
            userList: [],
        }
    }

    searchUsers() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/search_user?q='+this.state.input_text)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                userList: responseJson
            });
        })
        .catch((error) => {
          console.log(error)
        })
    }

    componentDidMount() {
        this.searchUsers();
        AsyncStorage.getItem('token', (err, result) =>{
            this.setState({ token: result });
        })
    }

    displayData(item){
        return(
            <View style={styles.user_list}>
                
                <Text style={styles.name_label}>{item.given_name} {item.family_name}</Text>
                
                <CustomIcon 
                    name={'account-plus'} 
                    size={36} 
                    color={'#1F5673'} 
                    accessibilityLabel='add user to following list'
                    onPress={() => this.followUser(item.user_id)} 
                />
            </View>
        )
    }


    followUser(user_id){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+user_id+'/follow', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                "X-Authorization": JSON.parse(this.state.token)
            }})
        .then((response) => {
            Alert.alert("user followed successfully ");
            this.setState({isFollowed: true})
           
        })
        .catch((error)=>{
        console.log(error)
        })
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
              this.setState({isFollowed: false})  
          })
          .catch((error)=>{
          console.log(error)
          })
      }

    render(){
        return(
            <View style={{backgroundColor: '#B9B8D3'}} accessible={true}>
                
                <View style={styles.header}>
                    <Text style={styles.page_title}>Search</Text>
                </View>

                <View style={styles.page_container}>

                    <View style={styles.page_content}>
                        <TextInput
                            style={styles.input}
                            placeholder='Search other chitters...'
                            value={this.state.input_text}
                            onChangeText={(input_text) => this.setState({ input_text })} />

                        <CustomIcon 
                            name={'magnify'} 
                            size={46} 
                            color={'#1F5673'} 
                            accessibilityLabel='click to search'
                            onPress={() => this.searchUsers()}/>
                    </View>
                    

                    <View>
                        <FlatList
                            data = {this.state.userList}
                            renderItem={({item, index}) => this.displayData(item)}
                            keyExtractor={({given_name}, index) => given_name}
                        />
                    </View>

                </View>
            </View>
        )
    }
}

export default Search;