import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    splash_screen:{
        backgroundColor: '#B9B8D3', 
        height:550, 
        justifyContent:'center', 
        alignItems:'center'
    },

    page_title:{
        fontSize: 32,
        fontWeight:'bold',
        flex:1
    },

    icon_home:{
        marginHorizontal:8,
        flexDirection: 'row'
    },

    name_label: {
        fontSize: 18,
        fontWeight:'bold',
        flex:1
    },

    user_details:{
        fontSize: 16,
        fontWeight:'bold', 
    },

    chit_container:{
        flex:1,
        flexDirection: "row", 
        backgroundColor:'white',
        borderColor: '#1F5673',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginTop: 8,
        marginHorizontal: 12,
        elevation:4
    },
    chit_content:{
        flexDirection:'column', 
        width: 320
    },
    chit_text:{
        flexWrap:'wrap' 
    },
    chit_location:{
        fontSize:12,
        fontStyle:'italic',
        marginTop: 4,
        borderTopColor: 'gray',
        borderTopWidth: 1,
        paddingTop: 4
    },

    image:{
        width: 50,
    }
})