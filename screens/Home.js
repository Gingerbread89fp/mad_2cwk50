import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';  

import CustomIcon from '../app_components/customizedComponents';

import styles from '../styles/app_style'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chitsList: [],
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: 'Chittr',
        headerTitleStyle: styles.page_title,
        headerStyle: {height: 64, marginBottom: 12},
        headerRight:() =>(
            <CustomIcon
                name={'md-chatboxes'}
                size={40}
                color={'green'}
                onPress={() => navigation.navigate('NewChits')}
            />
        )
    });

    getChits() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    chitsList: responseJson
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    displayData(item) {
        return (
            <View style={styles.chit_layout}>
                <Text style={styles.label}>{item.user.given_name}</Text>
                <Text>{item.chit_content}</Text>
            </View>
        )
    }

    componentDidMount() {
        this.getChits();
    }

    render() {
        return (
            <View>       
                <FlatList
                    data={this.state.chitsList}
                    renderItem={({ item, index }) => this.displayData(item, index)}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        )
    }
}

export default Home;