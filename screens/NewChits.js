import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CustomIcon from '../app_components/customizedIconButton';

import styles from '../styles/app_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            token: '',
            chit_content: '',
            chit_drafts:[]
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
        .then((response) => navigation.navigate('Home'))
        .catch((error) => {
            console.log(error)
        })
    }

    displayAlertMessage(){
        const { navigation } = this.props;
        Alert.alert(
            'Login error',
            'Please login to post chits',
            [{text: 'Ok', onPress: () => navigation.navigate('Home')}]
        )
    }

    displayData(item) {
        return (
            <View>
                <Text>{item}</Text>
            </View>
        )
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

                {/* display while typing how many char had been used*/}  
                <Text>{this.state.chit_content.length}/141</Text> 
                
                <View style={styles.new_chits_buttons_layout}>
                    <TouchableOpacity
                        style={styles.new_chits_buttons}
                        onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                            if(result !=null){
                                this.setState({ token: result });
                                this.postChits();
                            }
                            else{ this.displayAlertMessage() }
                        })}>
                        <Text>POST CHITS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.new_chits_buttons}
                        onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                            if(result !=null){
                                this.setState({token: result});
                                AsyncStorage.setItem('chits', JSON.stringify(this.state.chit_drafts));
                            }
                            else{this.displayAlertMessage()}
                        })}>
                        <Text>SAVE DRAFT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.new_chits_buttons}
                        onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                            if(result !=null){
                                this.setState({ token: result });
                                AsyncStorage.getItem('chits', (err, result) =>{
                                    this.setState({ chit_drafts: JSON.parse(result) });
                                    console.log('**** DEBUG ', this.state.chit_drafts)
                                })
                            }
                            else{this.displayAlertMessage()}
                        })}>
                        <Text>VIEW DRAFT</Text>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity
                    style={styles.new_chits_buttons}
                    onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                        if(result !=null){
                            this.props.navigation.navigate('Camera')
                        }
                        else{this.displayAlertMessage()}
                    })}>
                    <Text>POST PICTURE</Text>
                </TouchableOpacity>


                <Text>DRAFTS</Text>

                
                <FlatList
                    data={this.state.chit_drafts}
                    renderItem={({ item, index }) => this.displayData(item, index)}
                    keyExtractor={({ item}, index) => 'following-list'+index}
                />
            </View>
        )
    }
}

export default NewChits;