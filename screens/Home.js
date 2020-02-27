import React, { Component } from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';
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

    static navigationOptions = {
        header: null
    };

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
                <View style={styles.page_container}>
                    <Text style={styles.page_title}>Chittr</Text>

                    <CustomIcon
                        name={'md-chatboxes'}
                        size={40}
                        color={'green'}
                        onPress={() => this.props.navigation.navigate('NewChits')}
                    />
                </View>
                
                <View>
                    <FlatList
                        data={this.state.chitsList}
                        renderItem={({ item, index }) => this.displayData(item, index)}
                        keyExtractor={({ id }, index) => id}
                    />
                </View>
            </View>
        )
    }
}

export default Home;