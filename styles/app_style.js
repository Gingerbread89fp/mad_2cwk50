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
        alignItems:'stretch',
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        width: 300,
        marginBottom: 20,
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

    //HOME PAGE
    icon_home:{
        marginHorizontal: 8, 
        flexDirection: "row", 
        justifyContent: "space-evenly"    
    },

    //names in Home + Search
    name_label: {
        fontSize: 16,
        fontWeight:'bold',
        flex:1
    },

    user_details:{
        fontSize: 16,
        fontWeight:'bold', 
    },

    chit_layout:{
        backgroundColor:'white',
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        padding: 10,
        marginBottom: 8,
        marginHorizontal: 12,
        elevation:4
    },
    
    
    //NEW CHIT PAGE
    input_chit:{
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        width: 380,
        height: 80
    },

    new_chit_page:{
        alignContent:'center',
        flexDirection:'column',
        marginHorizontal:12
    },

    new_chits_buttons_layout:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:12,
    },
    new_chits_buttons:{
        marginRight:8,
        borderWidth:2,
        borderColor: 'green',
        height: 32,
        width: 112,
        justifyContent:'center',
        alignItems:'center',
        textDecorationColor:'black'
    },

    camera:{
        flex:1,
        alignItems:'center',
        width:'100%'
    },

    //PROFILE PAGE
    image_profile:{
        width: 128,
        height: 128, 
        borderRadius: 64, 
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        marginBottom: 20,
        marginHorizontal: 8
    },

    profile_follow:{
        flexDirection:'column',
        justifyContent: 'space-around',
        marginHorizontal:20,
        padding:8,
        width: '50%'
    },
    follow_title:{
        fontSize: 32,
        fontWeight:'bold',
        marginBottom:6
    },
    name_follow: {
        fontSize: 18,
        fontWeight:'bold',
        flex:1
    }
})