import React, { Component } from 'react';
import { Text, View, TextInput, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles/app_style';
import CustomIcon from '../app_components/customizedComponents';

class Search extends Component{

    constructor(props) {
        super(props);
        this.state = {
            input_text: '',
            token:'',
            userList: []
        }
    }

    static navigationOptions = ({
        title: 'Search',
        headerTitleStyle: styles.page_title,
        headerStyle: {height: 64, marginBottom: 12}
    });

    searchUsers() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/search_user?q='+this.state.input_text)
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

    componentDidMount() {
        this.searchUsers();
    }

    displayData(item){
        return(
            <View style={styles.page_content}>
                
                <Text style={styles.label}>{item.given_name} {item.family_name}</Text>

                <CustomIcon 
                    name={'account-plus'} 
                    size={36} 
                    color={'green'} 
                    onPress={() => AsyncStorage.getItem('token', (err, result) =>{
                        if(result !=null){
                            this.setState({ token: result });
                            this.followUser(item.user_id)
                        }
                        else{
                            Alert.alert(
                                'Login error',
                                'Please login to follow other chitters',
                                //[{text: 'Ok', onPress: () => navigation.navigate('Login')}]
                            )
                        }
                    })}/>
            </View>
        )
    }


    followUser(user_id){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+user_id+'/follow', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                "X-Authorization": JSON.parse(this.state.token)
            }})
        .then((response) => {
            Alert.alert("user followed successfully ");
           
        })
        .catch((error)=>{
        console.log(error)
        })
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
                        placeholder='Search other chitters...'
                        value={this.state.input_text}
                        onChangeText={(input_text) => this.setState({ input_text })} />

                    <CustomIcon 
                        name={'magnify'} 
                        size={36} color={'green'} 
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
        )
    }
}

export default Search;