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

    page:{
        backgroundColor: '#B9B8D3', 
        height:560
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
        height: 500,
        elevation: 4
    },

    page_content: {
        alignItems:'center', 
        paddingTop: 18
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

    button_style:{
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
    
    
})