import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import AsyncStorage from '@react-native-community/async-storage';

import CustomIcon from '../app_components/customizedIconButton';

class Camera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chit_id: ''
        }
    }

    static navigationOptions= {
        headerTitleStyle: styles.page_title,
        headerTintColor: 'white',
        headerStyle: {height: 64, marginBottom: 12, backgroundColor: 'black'}
      }

    async takePicture() {
        if (this.camera) {
            const settings = { quality: 0.5, base64: true, pauseAfterCapture: false };
            const picture = await this.camera.takePictureAsync(settings);

            return fetch('http://10.0.2.2:3333/api/v0.0.5/chits/'+this.state.chit_id+'/photo', {
                method: 'POST',
                headers: {
                    "Content-Type": "image/jpeg",
                    "X-Authorization": JSON.parse(this.state.token)
                },
                body: picture
            })
            .then((reposnse) => Alert.alert('Uploaded','Image added to your chit successfully'))
            .then((response) => this.props.navigation.navigate('Home'))
            .catch((error) => {
                console.log(error)
            })
        }
    };

    componentDidMount(){
        AsyncStorage.getItem('token', (err, result) =>{
            this.setState({token: result})
        })
        AsyncStorage.getItem('chitId', (err, result) =>{
            this.setState({chit_id: result})
        })
    }

    render() {
        return (
            <View style={styles.camera_container}>
                <RNCamera
                    ref={ref => { this.camera = ref }}
                    style={styles.camera_container}
                    type={RNCamera.Constants.Type.back}
                />
                <View style={styles.camera_button_container}>
                    <CustomIcon
                        name={'camera-outline'}
                        size={60}
                        color={'white'}
                        onPress={this.takePicture.bind(this)}
                    />
                </View>
            </View>

        );
    }

}

export default Camera;