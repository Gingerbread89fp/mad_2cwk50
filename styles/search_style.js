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
    page_content: {
        alignContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
        marginVertical:8,
        marginHorizontal:18
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

    name_label: {
        fontSize: 18,
        fontWeight:'bold',
        flex:1
    }
})