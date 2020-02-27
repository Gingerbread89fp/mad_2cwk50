import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Avatar } from "react-native-elements";

import CustomIcon from '../app_components/customizedComponents';

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
            <View style={styles.page_content}>
                <Avatar
                    size='medium'
                    rounded
                    icon={{name:'user', type: 'font-awesome'}}
                    style={styles.avatar} 
                />
                <CustomIcon name={'md-person'} size={36} color={'green'} />
                <Text style={styles.label}>{item.given_name} {item.family_name}</Text>
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

                <View style={styles.page_container}>
                    <Text style={styles.page_title}>Search</Text>
                </View>

                <View style={styles.page_container}>
                    <TextInput
                        style={styles.input}
                        value={this.state.given_name}
                        onChangeText={(given_name) => this.setState({ given_name })} />
                    <CustomIcon name={'md-search'} size={36} color={'green'} onPress={() => this.searchUsers()}/>
                </View>
                

                <View>
                    <FlatList
                    data = {this.state.userList}
                    renderItem={({item, index}) => this.displayData(item, index)}
                    keyExtractor={({given_name}, index) => given_name}
                    />
                </View>

            </View>
        )
    }
}

export default Search;