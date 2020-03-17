import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from '../styles/app_style';

import PropTypes from 'prop-types';

export default class CustomFormInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View accessible={true}>
                <Text style={styles.label}> {this.props.labelTitle}</Text>
                <TextInput
                    style={styles.form_input}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText} 
                    secureTextEntry={this.props.secureTextEntry}/>
            </View>
        )
    }
}

CustomFormInput.propTypes = {
    labelTitle: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    secureTextEntry: PropTypes.bool
}