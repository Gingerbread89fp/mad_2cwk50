import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import PropTypes from 'prop-types';

export default class CustomButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
        <TouchableOpacity onPress={this.props.onPress}>
            <Text>{this.props.title}</Text>
        </TouchableOpacity>
      )
  
    }  
}

CustomButton.propTypes = {title: PropTypes.string.isRequired, onPress: PropTypes.func.isRequired}