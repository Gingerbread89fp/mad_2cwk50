import React, { Component } from 'react';
import { Text, View, TextInput, Alert, FlatList, TouchableHighlightBase } from 'react-native';
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
                userList: responseJson,
            });
        })
        .then(() =>{
            this.setState({
                input_text:'',
            })
        })
        .catch((error) => {
          console.log(error)
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
                    onPress={() => {
                        if(this.state.token !=null){
                            this.followUser(item.user_id);
                        }
                        else{ this.displayAlertMessage() }
                    }} />
            </View>
        )
    }
    
    displayAlertMessage(){
        const { navigation } = this.props;
        Alert.alert(
            'Login error',
            'Please login to follow other chitters',
            [{text: 'Ok', onPress: () => navigation.navigate('Home')}]
        )
    }
    
    followUser(user_id){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+user_id+'/follow', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                "X-Authorization": JSON.parse(this.state.token)
        }})
        .then(() => {
            Alert.alert('Following','user followed successfully');
        })
        .catch((error)=>{
            console.log(error)
        })
    }
        
    componentDidMount() {
        AsyncStorage.getItem('token', (err, result) =>{
            this.setState({ token: result });
        })
        this.searchUsers();
    }

    componentDidUpdate(prevState){
        if(this.state.token != prevState.token){
            this.searchUsers()
        }
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