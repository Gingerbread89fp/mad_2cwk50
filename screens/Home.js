import React, { Component } from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';

import styles from '../styles/app_style'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            chitsList: [],
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

    getChits() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    chitsList: responseJson
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    displayData(item){
        return(
            <View>
                <Text>{item.user.given_name}</Text>
                <Text>{item.chit_content}</Text>
            </View>
        )
    }

    componentDidMount(){
        this.getChits();
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.button_style}
                    onPress={() => this.props.navigation.navigate('NewChits')}>
                    <Text>NEW CHIT</Text>
                </TouchableOpacity>

                <View>
                    <FlatList
                    data = {this.state.chitsList}
                    renderItem={({item, index}) => this.displayData(item, index)}
                    keyExtractor={({id}, index) => id}
                    />
                </View>
            </View>
        )
    }
}

export default Home;