import React, { Component } from 'react';
import { FlatList, Text, View, Image } from 'react-native'; 

import CustomIcon from '../app_components/customizedIconButton';

import styles from '../styles/home_style'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            chitsList: [],
            uri:'',
            isChitPicture: false
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
                    onPress={() => navigation.navigate('NewChits')}
                />
                <CustomIcon
                    name={'login'}
                    size={40}
                    color={'#1F5673'}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        )
    });

    getChits() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                chitsList: responseJson
            })        
        })
        //.then(()=>this.getChitPicture())
        .catch((error) => {
            console.log(error)
        })
    }

    displayChitsList(item) {
        return (
            <View style={styles.chit_container} key={item.chit_id}>
                <CustomIcon
                    name={'account-circle-outline'}
                    size={40}
                    color={'#1F5673'}
                />
                <View style={styles.chit_content}>
                    <Text style={styles.name_label}>{item.user.given_name}</Text>
                    <Text style={styles.chit_text}>{item.chit_content}</Text>
                    {item.location ? 
                        (<Text style={styles.chit_location}>Your Location: {item.location.latitude}, {item.location.longitude}</Text>) 
                        : null}
                    {this.state.isChitPicture ? (<Image source={{uri: this.state.uri}}/>) : null }
                </View>
            </View>
        )
    }

    componentDidMount() {
        this.getChits();
    }

    render() {

        if(this.state.isLoading){
            return(
                <View style={{backgroundColor: '#B9B8D3', height:550, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize: 42}}>Welcome to Chittr</Text>
                </View>
            )
        }


        return (
            <View style={{backgroundColor: '#B9B8D3'}}>       
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