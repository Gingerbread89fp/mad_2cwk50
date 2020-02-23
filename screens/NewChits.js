import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';

import styles from '../styles/app_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            token: '',
            chit_id: '',
            timestamp: '',
            chit_content: '',
            user_id: '',
            given_name: '',
            family_name: '',
            email: ''
        }
      }

    getToken() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/login')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    id: responseJson.id,
                    token: responseJson.token
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getUserDetails(id){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/user/`{id}`')
        .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    id: responseJson.id,
                    token: responseJson.token
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    postChits(token, id){
        return fetch('URL/chits', {
      method: 'POST',
      headers: { "Content-Type": "application/json", 'X-Authorization': {token}},
      body: JSON.stringify({
        timestamp: parseInt(this.state.timestamp),
        chit_content: this.state.content,
        user: {
            user_id: parseInt(id),
            given_name: this.state.given_name,
            family_name: this.state.family_name,
            email: this.state.email
        }
      })
    })
    .then((response) => this.getChits())
    .catch((error) => {
      console.log(error)
    })
    }

    render() {
        return (
        
            <View>
                <TextInput 
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}/>


                <TouchableOpacity
                    style={styles.button_style}
                    onPress={() => this.postChits()}>
                    <Text>POST CHITS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewChits;