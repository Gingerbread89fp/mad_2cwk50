import React, { Component } from 'react';
import { FlatList, Text, View, Image } from 'react-native'; 
import CustomIcon from '../app_components/customizedIconButton';

import styles from '../styles/home_style'
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoggedIn: false,
            chitsList: [],
            uri:'',
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Chittr',
        headerTitleStyle: styles.page_title,
        headerStyle: {height: 64},
        headerRight:() =>(
            <View style={styles.icon_home}>
                <CustomIcon
                    name={'message-text-outline'}
                    size={40}
                    color={'#1F5673'}
                    accessibilityLabel='write new chit'
                    onPress={() => navigation.navigate('NewChits')}
                />
                <CustomIcon
                    name={'login'}
                    size={40}
                    color={'#1F5673'}
                    accessibilityLabel='go to login'
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        )
    });

    getChits() {
        if(this.state.isLoggedIn){
            return fetch('http://10.0.2.2:3333/api/v0.0.5/chits?count=30')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    chitsList: responseJson
                })        
            })
            .then(()=>this.getChitPicture())
            .catch((error) => {
                console.log(error)
            })
        }
        else{
            return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    chitsList: responseJson
                })        
            })
            .then(()=>this.getChitPicture())
            .catch((error) => {
                console.log(error)
            })
        }
    }

    /**
     * after retrieving the chits loop through all of them to extract the id and check if an image 
     * is associated to that chit 
     */
    getChitPicture(){
        this.state.chitsList.map((data) =>{
            return fetch('http://10.0.2.2:3333/api/v0.0.5/chits/'+data.chit_id+'/photo')
            .then((response) =>{
                if(response.status != 404){
                    this.setState({
                        uri: response.url
                    })
                    data.url = this.state.uri   
                }              
            })
        })
    }

    displayChitsList(item) {
        const {url, chit_content, chit_id} = item
        const {given_name} = item.user
        return (
            <View style={styles.chit_container} key={chit_id}>
                <CustomIcon
                    name={'account-circle-outline'}
                    size={40}
                    color={'#1F5673'}
                    />
                <View style={styles.chit_content}>
                    <Text style={styles.name_label}>{given_name}</Text>
                    <Text style={styles.chit_text}>{chit_content}</Text>
                    
                    <Image source={{uri: url, width: 100, height: 100}} />
                    {item.location ? 
                        (<Text style={styles.chit_location}>Your Location: {item.location.latitude}, {item.location.longitude}</Text>) 
                        : null}
                </View>
            </View>
        )
    }

    async getLogin(){
        await AsyncStorage.getItem('login', (err, res)=>{
            this.setState({
                isLoggedIn: res
            })
            this.getChits();
        })
    }

    componentDidMount() {
        this.getLogin()
    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={styles.splash_screen}>
                    <Image style={{width: 400, height: 196}} source={require('../assets/images/welcomeScreen.png')} />
                </View>
            )
        }


        return (
            <View style={{backgroundColor: '#B9B8D3'}} accessible={true}>       
                <FlatList
                    data={this.state.chitsList}
                    renderItem={({ item, index }) => this.displayChitsList(item, index)}
                    keyExtractor={( {item}, index) => 'chit-list-'+index}
                />
            </View>
        )
    }
}

export default Home;