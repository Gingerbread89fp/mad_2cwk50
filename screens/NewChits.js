import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/app_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            chit_id: '',
            timestamp: '',
            chit_content: '',
            user_id: '',
            given_name: '',
            family_name: '',
            email: ''
        }
    }

    getUserDetails(id){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+id)
        .then((response) => response.json())
            .then((responseJson) => {
                console.log('***DEBUG: ',responseJson)
                this.setState({
                    id: id,
                    given_name: responseJson.given_name,
                    family_name: responseJson.family_name,
                    email: responseJson.email
                });
                AsyncStorage.setItem('user', JSON.stringify(responseJson));
            })
            .then((response) => {
                AsyncStorage.getItem('token', (err, result) =>{
                    this.postChits(result);
                    console.log(JSON.parse(result))
                })})
            .catch((error) => {
                console.log(error)
            })
    }

    

    postChits(token){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                Accept: "application/json",
                "X-Authorization": token
            },
            body: JSON.stringify({
                timestamp: parseInt(this.state.timestamp),
                chit_content: this.state.content,
                user: {
                    given_name: this.state.given_name,
                    family_name: this.state.family_name,
                    email: this.state.email
                }
            })
        })
        .then((response) => this.props.navigation.navigate('HomePage'))
        .catch((error) => {
        console.log(error)
        })
    }

    render() {
        return (
        
            <View>
                <TextInput 
                    style={styles.input}
                    value={this.state.chit_content}
                    onChangeText={(chit_content) => this.setState({ chit_content })}/>

                
                <TouchableOpacity
                    style={styles.button_style}
                    onPress={() => AsyncStorage.getItem('userId', (err, result) =>{
                        this.getUserDetails(result);
                    })}>
                    <Text>POST CHITS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewChits;