import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 

import styles from '../styles/app_style';

import PropTypes from 'prop-types';

export default class CustomIcon extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
        <View style={styles.custom_icon_layout}>
          <TouchableOpacity 
            onPress={this.props.onPress} 
            accessible={true} 
            accessibilityLabel={this.props.accessibilityLabel}
          >
            <MaterialCommunityIcons 
              name={this.props.name} 
              size={this.props.size} 
              color={this.props.color} />
          </TouchableOpacity>
        </View>
      )
  
    }  
}

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired, 
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  accessibilityLabel: PropTypes.string,
  onPress: PropTypes.func
}