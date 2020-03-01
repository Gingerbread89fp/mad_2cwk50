import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/app_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            token: '',
            chit_content: ''
        }
    }

    static navigationOptions= {
        title: 'New Chit',
        headerTitleStyle: styles.page_title,
        headerStyle: {height: 64, marginBottom: 12}
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
                chit_content: this.state.chit_content
            })
            
        })
        .then((response) => this.props.navigation.navigate('Home'))
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.new_chit_page}>
                <TextInput 
                    style={styles.input_chit}
                    value={this.state.chit_content}
                    multiline={true}
                    maxLength={141} //prevent users to write more than 141 chars
                    onChangeText={(chit_content) => this.setState({ chit_content })}/>
                    
                <Text>{this.state.chit_content.length}/141</Text> 
                
                <TouchableOpacity
                    style={styles.button_style}
                    onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                        if(result !=null){
                            this.setState({ token: result });
                            this.postChits();
                            console.log('DEBUG TOKEN: ', result)
                        }
                        else{
                            const { navigation } = this.props;
                            Alert.alert(
                                'Login error',
                                'Please login to post chits',
                                [{text: 'Ok', onPress: () => navigation.navigate('Home')}]
                            )
                        }
                    })}>
                    <Text>POST CHITS</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default NewChits;