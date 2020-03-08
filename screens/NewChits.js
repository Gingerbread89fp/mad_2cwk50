import React, { Component } from 'react';
import { Text, View, TextInput, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import CustomIcon from '../app_components/customizedIconButton';

import styles from '../styles/app_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            token: '',
            chit_content: '',
            longitude: 0,
            latitude:0,
            chit_drafts:[]
        }
    }

    static navigationOptions= {
        title: 'New Chit',
        headerTitleStyle: styles.page_title,
        headerStyle: {height: 64, marginBottom: 12}
    }

    postChits(){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json", 
                "X-Authorization": JSON.parse(this.state.token)
            },
            body: JSON.stringify({
                timestamp: 0,
                chit_content: this.state.chit_content,
                location: {
                    longitude: this.state.longitude,
                    latitude: this.state.latitude
                }
            })
            
        })
        .then((response) => this.props.navigation.navigate('Home'))
        .catch((error) => {
            console.log(error)
        })
    }

    displayAlertMessage(){
        const { navigation } = this.props;
        Alert.alert(
            'Login error',
            'Please login to post/save chits or upload a picture',
            [{text: 'Ok', onPress: () => navigation.navigate('Home')}]
        )
    }

    displayDraft(item) {
        return (
            <View style={styles.chit_layout}>
                <Text>Your position: {item.latitude}, {item.longitude}</Text>
                <Text style={styles.chit_draft}>{item}</Text>
                <View style={{flexDirection:'row', flex:1}}>
                    <CustomIcon 
                        name={'file-document-edit-outline'} 
                        size={28} 
                        color={'green'} 
                        onPress={()=> this.props.navigation.navigate('EditDraft', {editDraft: item})}/>
                    <CustomIcon 
                        name={'delete-outline'} 
                        size={28} 
                        color={'green'} 
                        onPress={()=> this.deleteDraft(item)}/>
                    <CustomIcon 
                        name={'send'} 
                        size={28} 
                        color={'green'} 
                        onPress={()=> {
                            this.setState({chit_content: item})
                            //text will be displayed back into the input text and can be sent from there
                        }}/>
                    <CustomIcon 
                        name={'timetable'} 
                        size={28} 
                        color={'green'} 
                        onPress={()=> this.deleteDraft}/>
                </View>
                
            </View>
        )
    }

    deleteDraft(item){
        var list = this.state.chit_drafts;
        var position = list.indexOf(item);
        list.splice(position, 1)
        this.setState({chit_drafts: list})
        AsyncStorage.setItem('chits', JSON.stringify(this.state.chit_drafts))
    }

    componentDidMount(){
        AsyncStorage.getItem('token', (err, result) =>{
            this.setState({token: result})
        })
        {this.state.chit_draft ? (
            AsyncStorage.getItem('chits', (err, chit_r)=>{
                let chits = JSON.parse(chit_r)
                this.setState({
                    chit_drafts: this.state.chit_drafts.concat(chits)
                })
                console.log('drafts', this.state.chit_drafts)
            })
        ) : null}
    }

    render() {
        return (
            <View style={styles.new_chit_page}> 
                <FlatList
                    extraData={this.state}
                    data={this.state.chit_drafts}
                    renderItem={({ item, index }) => this.displayDraft(item)}
                    keyExtractor={({ item}, index) => 'chits-list-'+index}
                    //in order to allow scrollable feature for the drafts and prevent warning from the use
                    //of ScrollView with FlatList nested inside all the components above the draft
                    //are rendered as list header components
                    ListHeaderComponent={(
                        <View>
                            <TextInput 
                                style={styles.input_chit}
                                value={this.state.chit_content}
                                multiline={true}
                                maxLength={141} //prevent users to write more than 141 chars
                                onChangeText={(chit_content) => this.setState({ chit_content })}/>

                            {/*display while typing how many char had been used*/}
                            <Text>{this.state.chit_content.length}/141</Text> 
                            
                            <View style={styles.new_chits_buttons_layout}>
                                <CustomIcon 
                                    name={'send'} 
                                    size={32} 
                                    color={'green'} 
                                    onPress={() => {
                                        if(this.state.token !=null){
                                            this.postChits();
                                        }
                                        else{ this.displayAlertMessage() }
                                    }} />

                                <CustomIcon 
                                    name={'content-save'} 
                                    size={32} 
                                    color={'green'} 
                                    onPress={() => {
                                        if(this.state.token !=null){
                                            this.setState({
                                                chit_drafts: this.state.chit_drafts.concat(this.state.chit_content),
                                                chit_content: ''
                                            })
                                            Alert.alert('Draft saved')
                                            AsyncStorage.setItem('chits', JSON.stringify(this.state.chit_drafts));
                                        }
                                        else{this.displayAlertMessage()}
                                    }} />

                                <CustomIcon 
                                    name={'image-outline'} 
                                    size={32} 
                                    color={'green'} 
                                    onPress={() => {
                                        if(this.state.token !=null){
                                            this.props.navigation.navigate('Camera')
                                        }
                                        else{this.displayAlertMessage()}
                                    }} />
                                
                                <CustomIcon 
                                    name={'map-marker-outline'} 
                                    size={32} 
                                    color={'green'} 
                                    onPress={() => {
                                        if(this.state.token !=null){
                                            Alert.alert('your location had been added to your chit')
                                            Geolocation.getCurrentPosition(coords => {
                                                console.log(coords)
                                                this.setState({
                                                    latitude: coords.latitude,
                                                    longitude: coords.longitude
                                                })

                                            });
                                        }
                                        else{this.displayAlertMessage()}
                                    }} />
                            </View>
                                <Text style={styles.draft_title}>DRAFTS</Text>
                        </View>
                    )}
                />
                
            </View>
        )
    }
}

export default NewChits;