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
        textDecorationColor:'black'
    },
    page_title:{
        fontSize: 32,
        fontWeight:'bold',
        flex:1
    },
    page_container: {
        alignContent:'space-between',
        flexDirection:'row',
        marginHorizontal:12,
        marginTop:24,
        marginBottom:12
    },
    page_content: {
        alignContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginVertical:8,
        marginHorizontal:18
    },

    details_form:{
        flexDirection:'column',
        marginHorizontal:12,
        flex:1
    },

    form_input:{
        alignItems:'center',
        borderColor: '#B9B8D3',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        width: 300,
        height: 48,
        borderRadius: 8,
        marginBottom: 20
    },

    //LOGIN PAGE STYLE
    login_input:{
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        width: 300,
        marginBottom: 20
    },

    label:{
        fontSize: 16,
        fontWeight:'bold'
    },

    input:{
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        width: 300,
        marginBottom: 20,
        flex:1
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

    custom_icon_layout:{
        marginHorizontal: 8, 
        flexDirection: "row", 
        justifyContent: "space-evenly"    
    }
})