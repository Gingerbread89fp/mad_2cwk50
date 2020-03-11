import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    header: {
        alignContent:'space-around',
        flexDirection:'row',
        height: 64,
        paddingTop: 12,
        paddingHorizontal: 12,
        backgroundColor: 'white'
    },

    title: {
        fontSize: 32,
        fontWeight:'bold',
    },

    icon_header:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    page_container: {
        alignContent:'space-between',
        marginHorizontal:12,
        marginVertical: 8,
        borderColor: '#1F5673',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius: 8,
        paddingTop:8,
        backgroundColor: 'white',
        height: 600,
        elevation: 4
    },

    page_content: {
        alignItems:'stretch',
        flexDirection:'column',
        marginHorizontal:8,
        padding: 8,
        backgroundColor: '#90C3C8',
        borderRadius: 8,
        height: 250
    },

    form_input:{
        alignItems:'stretch',
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

    details_form:{
        flexDirection:'column',
        marginHorizontal:12,
        flex:1
    },

    user_details_font:{
        fontSize: 16,
        fontWeight:'bold', 
    },

    image_profile:{
        width: 156,
        height: 156, 
        borderRadius: 32, 
        borderWidth: 1,
        borderColor: '#B9B8D3',
        marginBottom: 12
    },

    profile_follow:{
        flexDirection:'column',
        justifyContent: 'space-around',
        padding:8,
        width: '60%',
        marginTop: 14
    },
    follow_title:{
        fontSize: 30,
        fontWeight:'bold',
        marginBottom:6
    },
    name_follow: {
        fontSize: 18,
        fontWeight:'bold',
        flex:1
    },

    button_style:{
        backgroundColor: '#90C3C8',
        borderWidth:2,
        borderColor: '#1F5673',
        height: 32,
        width: 128,
        justifyContent:'center',
        alignItems: 'center',
        textDecorationColor:'black'
    },
    
    
})