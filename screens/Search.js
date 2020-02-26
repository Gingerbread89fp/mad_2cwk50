import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Avatar, SearchBar } from "react-native-elements";

class Search extends Component{

    constructor(props) {
        super(props);
        this.state = {
            given_name: '',
            family_name: '',
            user_id:'',
            userList: []
        }
    }

    searchUsers() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/search_user?q='+this.state.given_name)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                userList: responseJson
            });
            console.log("****DEBUG ", this.state.userList)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    followUser(){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+this.state.user_id+'/follow')
        .then((response) => {
            Alert.alert("user followed successfully ")
        })
        .catch((error)=>{
        console.log(error)
        })
    }

    displayData(item){
        return(
            <View>
                <Avatar
                size='medium'
                rounded
                icon={{name:'user', type: 'font-awesome'}} 
                containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}/>
                <Text>{item.given_name}, {item.family_name}</Text>
                <TouchableOpacity
                    style={styles.button_style}
                    onPress={() => this.followUser()}>
                    <Text>+ FOLLOW</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <View>
                <SearchBar
                    style={styles.input}
                    value={this.state.given_name}
                    onChangeText={(given_name) => this.setState({ given_name })} />

                <TouchableOpacity
                    style={styles.button_style}
                    onPress={() => this.searchUsers()}>
                    <Text>SEARCH</Text>
                </TouchableOpacity>

                <View>
                    <FlatList
                    data = {this.state.userList}
                    renderItem={({item, index}) => this.displayData(item, index)}
                    keyExtractor={({user_id}, index) => user_id}
                    />
                </View>

            </View>
        )
    }
}

export default Search;