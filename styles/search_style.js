import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    
    header: {
        alignContent:'space-between',
        flexDirection:'row',
        height: 64,
        paddingTop: 12,
        paddingHorizontal: 12,
        backgroundColor: 'white'
    },

    page_title:{
        fontSize: 32,
        fontWeight:'bold',
        flex:1
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

    page_content:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:8
    },

    user_list: {
        alignItems:'center',
        flexDirection:'row',
        marginVertical:8,
        marginHorizontal:18
    },

    input:{
        borderColor: '#90C3C8',
        borderStyle: 'solid',
        borderWidth: 4,
        paddingLeft: 10,
        width: 300,
        height: 48,
        borderRadius: 8,
        marginBottom: 20
    },

    name_label: {
        fontSize: 18,
        fontWeight:'bold',
        flex:1
    }
})