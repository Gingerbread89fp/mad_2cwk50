import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert } from 'react-native';
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

    static navigationOptions= {
        title: 'New Chit'
      }

    postChits(){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                "X-Authorization": JSON.parse(this.state.token)
            },
            body: JSON.stringify({
                timestamp: 0,
                chit_content: this.state.chit_content,
                /* user: {
                    user_id: this.state.user_id,
                    given_name: this.state.given_name,
                    family_name: this.state.family_name,
                    email: this.state.email
                } */
            })
            
        })
        .then((response) => this.props.navigation.navigate('Home'))
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
                        if(result !=null){
                            this.setState({ token: result });
                            this.postChits();
                            console.log('DEBUG TOKEN: ', result)
                        }
                        else{Alert.alert("Please login to post chits")}
                    })}>
                    <Text>POST CHITS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewChits;