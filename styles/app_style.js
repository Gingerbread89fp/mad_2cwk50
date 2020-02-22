import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    button_style:{
        backgroundColor: 'lightblue',
        borderWidth:2,
        borderColor: 'blue',
        height: 30,
        width: 40,
        justifyContent: 'center',
        marginBottom: 30
    },

    input:{
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        width: 300,
        marginBottom: 20
    },
    
    image:{
        width: 256, 
        height: 256, 
        borderRadius: 150, 
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        marginBottom: 20
    },

    label: {
        fontSize: 16,
        fontWeight:'bold'
    },
    
    page_container: {
        height: 150
    }
})