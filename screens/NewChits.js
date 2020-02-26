import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/app_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            token: '',
            //timestamp: '',
            chit_content: '',
            user_id: '',
            given_name: '',
            family_name: '',
            email: ''
        }
    }

    postChits(){
        AsyncStorage.getItem('user', (err, result) =>{
            let user = JSON.parse(result)
            this.setState({
                user_id: user.user_id,
                given_name: user.given_name,
                family_name: user.family_name,
                email: user.email
            });
            console.log('DEBUG: ' + this.state.email)
        });
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                "X-Authorization": JSON.parse(this.state.token)
            },
            body: JSON.stringify({
                //timestamp: parseInt(this.state.timestamp),
                chit_content: this.state.chit_content,
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
                    onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                        this.setState({ token: result });
                        this.postChits();
                        console.log('DEBUG TOKEN: ', result)
                    })}>
                    <Text>POST CHITS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewChits;