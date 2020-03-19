import React, { Component } from 'react';
import { Text, View, TextInput, Alert, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { YellowBox } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
import CustomIcon from '../app_components/customizedIconButton';

/**
 * as the number of draft will be minimum the warning had been suppressed allowing the use the ScrollView 
 * to facilitate the movement towards the new content
 */
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
])

import styles from '../styles/new_chit_style'

class NewChits extends Component {

    constructor(props){
        super(props);
        this.state = {
            token: '',
            chit_content: '',
            longitude: 0,
            latitude:0,
            chit_drafts:[],
        }
    }

    static navigationOptions= {
        title: 'New Chit',
        headerTitleStyle: styles.page_title,
        headerStyle: {height: 64}
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
        .then((response) => response.json())
        .then((responseJson) => {
            AsyncStorage.setItem('chitId', JSON.stringify(responseJson.chit_id));
        })
        .then((response) => this.props.navigation.push('Home'))
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
            <View style={styles.draft_container}>
                <Text>Your position: {this.state.latitude} - {this.state.longitude}</Text>
                
                <Text style={styles.chit_draft}>{item}</Text>
                
                <View style={{flexDirection:'row', flex:1}}>
                    <CustomIcon 
                        name={'file-document-edit-outline'} 
                        size={28} 
                        color={'#1F5673'} 
                        accessibilityLabel='edit draft'
                        onPress={()=> this.props.navigation.navigate('EditDraft', {editDraft: item})}/>
                    <CustomIcon 
                        name={'delete-outline'} 
                        size={28} 
                        color={'#1F5673'} 
                        accessibilityLabel='delete draft'
                        onPress={()=> this.deleteDraft(item)}/>
                    <CustomIcon 
                        name={'send'} 
                        size={28} 
                        color={'#1F5673'} 
                        accessibilityLabel='post draft'
                        onPress={()=> {
                            //text will be displayed back into the input text and can be sent from there
                            //draft will be deleted once requested to be posted
                            this.setState({chit_content: item})
                            this.deleteDraft(item)
                        }}/>
                    <CustomIcon 
                        name={'timetable'} 
                        size={28} 
                        color={'#1F5673'} 
                        accessibilityLabel='schedule draft'
                        onPress={()=> this.deleteDraft}/>
                </View>
                
            </View>
        )
    }

    deleteDraft(item){
        const list = this.state.chit_drafts;
        const position = list.indexOf(item);
        list.splice(position, 1)
        this.setState({chit_drafts: list})
        AsyncStorage.setItem('chits', JSON.stringify(this.state.chit_drafts))
    }

    saveDraft(){
        let tempList = this.state.chit_drafts;
        tempList.push(this.state.chit_content)
        this.setState({
            chit_drafts: tempList,
            chit_content:''
        })
        AsyncStorage.setItem('chits', JSON.stringify(this.state.chit_drafts));
        Alert.alert('Draft saved')
    }

    addLocation(){
        Geolocation.getCurrentPosition(location => {
            this.setState({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        });
        Alert.alert('Geolocation','Your location had been added to your chit')
    }

    componentDidMount(){
        AsyncStorage.getItem('token', (err, result) =>{
            this.setState({token: result})
        })
        AsyncStorage.getItem('chits', (err, chit_r)=>{
            if(chit_r != null && this.state.token !=null){
                this.setState({
                    chit_drafts: JSON.parse(chit_r)
                })
            }
        })  
    }

    componentDidUpdate(prevState){
        if(this.state.chit_drafts != prevState.chit_draft){
            AsyncStorage.getItem('chits', (err, chit_r)=>{
                if(chit_r != null){
                    this.setState({
                        chit_drafts: JSON.parse(chit_r)
                    })
                }
            })  
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.new_chit_page} accessible={true}> 

                    <View style={styles.page_container}>
                        <TextInput 
                            style={styles.input_chit}
                            value={this.state.chit_content}
                            multiline={true}
                            maxLength={141} //prevent users to write more than 141 chars
                            onChangeText={(chit_content) => this.setState({ chit_content })}
                        />
                        <Text>Your position: {this.state.latitude} - {this.state.longitude}</Text>
                        {/*display while typing how many char had been used*/}
                        <Text>Characters available: {141-this.state.chit_content.length}</Text> 
                                
                        <View style={styles.new_chits_buttons_layout}>
                            <CustomIcon 
                                name={'send'} 
                                size={32} 
                                color={'#1F5673'} 
                                accessibilityLabel='post chit'
                                onPress={() => {
                                    if(this.state.token !=null){
                                        this.postChits();
                                    }
                                    else{ this.displayAlertMessage() }
                                }} />

                            <CustomIcon 
                                name={'content-save'} 
                                size={32} 
                                color={'#1F5673'} 
                                accessibilityLabel='save chit in drafts'
                                onPress={() => {
                                    if(this.state.token !=null){
                                        this.saveDraft();
                                    }
                                    else{this.displayAlertMessage()}
                                }} />

                            <CustomIcon 
                                name={'image-outline'} 
                                size={32} 
                                color={'#1F5673'} 
                                accessibilityLabel='add image to last chit'
                                onPress={() => {
                                    if(this.state.token !=null){
                                        this.props.navigation.navigate('Camera')
                                    }
                                    else{this.displayAlertMessage()}
                                }} />
                            
                            <CustomIcon 
                                name={'map-marker-outline'} 
                                size={32} 
                                color={'#1F5673'} 
                                accessibilityLabel='add location to your chit'
                                onPress={() => {
                                    if(this.state.token !=null){
                                        this.addLocation()
                                    }
                                    else{this.displayAlertMessage()}
                                }} />
                        </View>
                        
                        <Text style={styles.draft_title}>DRAFTS</Text>
            
                        <FlatList
                            data={this.state.chit_drafts}
                            renderItem={({ item, index }) => this.displayDraft(item)}
                            keyExtractor={({ item}, index) => 'chits-list-'+index}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default NewChits;