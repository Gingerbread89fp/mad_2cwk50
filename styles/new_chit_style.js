import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    page_title:{
        fontSize: 32,
        fontWeight:'bold',
        flex:1
    },
    
    //NEW CHIT PAGE
    input_chit:{
        justifyContent:'center',
        borderColor: '#90C3C8',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 4,
        padding: 10,
        height: 80
    },

    page_container: {
        alignContent:'center',
        marginHorizontal:12,
        paddingHorizontal:12,
        marginVertical: 8,
        borderColor: '#1F5673',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius: 8,
        paddingTop:8,
        backgroundColor: 'white',
        height: 1000,
        elevation: 8
    },

    page_container_edit: {
        alignContent:'center',
        marginHorizontal:12,
        paddingHorizontal:12,
        marginVertical: 8,
        paddingTop:24,
        borderColor: '#1F5673',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius: 8,
        paddingTop:24,
        backgroundColor: 'white',
        height: 520,
        elevation: 8
    },

    new_chit_page:{     
        flexDirection:'column',
        backgroundColor: '#B9B8D3',
        height: 1000,
    },

    new_chits_buttons_layout:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:12,
    },

    new_chits_buttons:{
        justifyContent:'center',
        alignItems: 'center',
        height: 40,
        width: 164,
        marginTop: 18,
        backgroundColor: '#90C3C8',
        borderWidth:2,
        borderRadius: 8,
        borderColor: '#1F5673', 
        textDecorationColor:'black'
    },

    draft_container:{
        flexDirection: 'column', 
        backgroundColor:'white',
        borderColor: '#1F5673',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 4,
        padding: 10,
        marginBottom: 8,
        elevation:4
    },

    draft_title:{
        fontSize: 24,
        marginBottom: 4,
        color: '#759FBC',
        fontWeight:'bold'
    },

    chit_draft:{
        fontSize: 16,
        marginBottom: 8,
        paddingBottom: 12,
        borderBottomColor: '#1F5673',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },

    //CAMERA PAGE
    camera_container:{ 
        flex: 1, 
        flexDirection: 'column' 
    },

    camera_button_container: { 
        flex: 0, 
        flexDirection: 'row', 
        justifyContent: 'center',
        backgroundColor: 'black' 
    }
})