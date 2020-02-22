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
                <View>
                    <Text>CONTENT</Text>
                </View>
                <View style={styles.page_container}>
                    <Text>MENU</Text>
                    <CustomButton 
                    style={styles.button_style} 
                    onPress={()=> this.props.navigation.navigate('Search')} 
                    title='go to Search' 
                />
                </View> 
            </View>
        )
    }
}

export default Home;