import React, { Component } from 'react';
import { Text, View } from 'react-native';

import CustomButton from '../app_components/button'
import styles from '../styles/app_style'

class Home extends Component{

    static navigationOptions = {
        header: null
      }


    render(){
        return(
            <View>
                <Text>Home page</Text>
                <View style={styles.page_container}>
                    <View>
                        <Text>CONTENT</Text>
                    </View>
                    <View>
                        <Text>Text</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Home;