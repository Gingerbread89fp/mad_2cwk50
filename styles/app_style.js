import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    
    page_container: { 
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#B9B8D3' 
    },

    page_content: {
        alignContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
        marginVertical:8,
        marginHorizontal:18,
        padding: 24,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#1F5673',
        backgroundColor: 'white',
        elevation: 4
    },

    login_input:{
        borderColor: '#90C3C8',
        borderStyle: 'solid',
        borderWidth: 4,
        padding: 8,
        width: 300,
        height: 48,
        marginBottom: 16,
        borderRadius: 8
    },

    image:{
        width: 220, 
        height: 220, 
        borderRadius: 110, 
        borderWidth: 1,
        borderColor: '#1F5673',
        marginBottom: 20
    },

    button_style:{
        justifyContent:'center',
        alignItems: 'center',
        height: 40,
        width: 164,
        marginTop: 12,
        backgroundColor: '#90C3C8',
        borderWidth:2,
        borderRadius: 8,
        borderColor: '#1F5673', 
        textDecorationColor:'black',
        marginBottom: 12
    },

    //ICONS
    custom_icon_layout:{
        marginHorizontal: 8, 
        flexDirection: "row", 
        justifyContent: "space-evenly"    
    },


    //INPUT BOX
    form_input:{
        borderColor: '#90C3C8',
        borderStyle: 'solid',
        borderWidth: 4,
        paddingLeft: 10,
        width: 360,
        height: 48,
        borderRadius: 8,
        marginBottom: 20
    },

    label:{
        fontSize: 16,
        fontWeight:'bold'
    }
})