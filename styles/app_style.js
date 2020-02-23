import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    button_style:{
        backgroundColor: 'lightgreen',
        borderWidth:2,
        borderColor: 'green',
        height: 32,
        width: 128,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 30,
        textDecorationColor:'black'
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
        width: 180, 
        height: 180, 
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
        alignItems:'stretch',
        alignContent:'space-between',
        flexDirection:'row',
        backgroundColor: 'pink',
        height:500
    }
})