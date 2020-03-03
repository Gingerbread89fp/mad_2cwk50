import React, { Component } from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';

import CustomIcon from '../app_components/customizedIconButton';

class Camera extends Component {

    static navigationOptions= {
        headerTitleStyle: styles.page_title,
        headerTintColor: 'white',
        headerStyle: {height: 64, marginBottom: 12, backgroundColor: 'black'}
      }

    async takePicture() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, pauseAfterCapture: false };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);

            return fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": JSON.parse(this.state.token)
                },
                body: JSON.stringify({
                    timestamp: 0,
                    chit_content: this.state.chit_content
                })

            })
            .then((response) => navigation.navigate('Home'))
            .catch((error) => {
                console.log(error)
            })
        }
    };

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
                        color={'black'}
                        onPress={this.takePicture.bind(this)}
                    />
                </View>
            </View>

        );
    }

}

export default Camera;