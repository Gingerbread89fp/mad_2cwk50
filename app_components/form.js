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
            <View>
                <Text style={styles.label}> {this.props.labelTitle}</Text>
                <TextInput
                    style={styles.form_input}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText} />
            </View>
        )
    }
}

CustomFormInput.propTypes = {
    labelTitle: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChangeText: PropTypes.func.isRequired
}