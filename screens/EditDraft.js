import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/new_chit_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            token: '',
            chit_content: '',
            chit_index:0,
            chit_drafts:[]
        }
    }

    static navigationOptions= {
        title: 'Edit Draft',
        headerTitleStyle: styles.page_title,
        headerStyle: {height: 64}
    }

    componentDidMount(){
        AsyncStorage.getItem('token', (err, result) =>{
            this.setState({token: result})
        })
        AsyncStorage.getItem('chits', (err, chit_r)=>{
            let chits = JSON.parse(chit_r)
            this.setState({
                chit_drafts: this.state.chit_drafts.concat(chits)
            })
            let params = this.props.navigation.state.params.editDraft
            let position = this.state.chit_drafts.indexOf(params);
            this.setState({
                chit_content: params,
                chit_index: position
            })
        })
    }

    render() {
        return (
            <View style={styles.new_chit_page}> 
                <View style={styles.page_container_edit}>
                    <TextInput 
                        style={styles.input_chit}
                        value={this.state.chit_content}
                        placeholder={this.state.chit_content}
                        multiline={true}
                        maxLength={141}
                        onChangeText={(chit_content) => this.setState({ chit_content })}/>

                    <Text>Chars used: {this.state.chit_content.length}/141</Text> 
                    
                    <View style={styles.new_chits_buttons_layout}>
                        <TouchableOpacity
                            style={styles.new_chits_buttons}
                            accessible={true}
                            accessibilityLabel='Take a picture'
                            onPress={() => {
                                const updatedChit = this.state.chit_content
                                const tempList = this.state.chit_drafts
                                tempList[this.state.chit_index] = updatedChit
                                this.setState({
                                    chit_drafts: tempList,
                                    chit_content: ''
                                })
                                Alert.alert('Draft updated')
                                AsyncStorage.setItem('chits', JSON.stringify(this.state.chit_drafts));
                                this.props.navigation.push('NewChits')
                            }}>
                            <Text>UPDATE DRAFT</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

export default NewChits;