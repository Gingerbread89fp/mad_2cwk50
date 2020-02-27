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
        marginHorizontal: 30,
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

    icon_home:{
        marginHorizontal: 8,     
    },

    //Login page and names in Home + Search
    label: {
        fontSize: 16,
        fontWeight:'bold'
    },
    
    page_title:{
        fontSize: 32,
        fontWeight:'bold',
        flex:1
    },

    page_container: {
        alignContent:'space-between',
        flexDirection:'row',
        marginHorizontal:8,
        marginVertical:8
    },
    page_content: {
        alignContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginVertical:8
    },

    avatar:{
        marginRight: 8
    },

    chit_layout:{
        backgroundColor:'white',
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        padding: 10,
        marginBottom: 8,
        marginHorizontal: 6,
        elevation:1
    }
})