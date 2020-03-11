import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    page_title:{
        fontSize: 32,
        fontWeight:'bold',
        flex:1
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
        justifyContent:'space-around',
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

    draft_container:{
        flex:1,
        flexDirection: "column", 
        backgroundColor:'white',
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        marginBottom: 8,
        marginHorizontal: 12,
        elevation:4
    },
    draft_title:{
        fontSize: 24,
        marginBottom: 4
    },

    chit_draft:{
        fontSize: 16,
        marginBottom: 8,
        paddingBottom: 12,
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        borderStyle: "solid"
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