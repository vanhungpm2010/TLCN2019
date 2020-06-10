import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{ 
        backgroundColor: "#ffffff", 
        flex: 1, 
        elevation: 5,
        paddingTop: 50
    },
    logoContainer: {
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 50
    },
    logo: {
        width: 80,
        height: 80,
    },
    header:{ 
        width: "100%", 
        height: 150, 
        backgroundColor: "#ffffff",
        justifyContent:'center',
        alignItems:'center'
    },
    avartar:{marginBottom:10 },
    scrollVew: { 
        flex: 1,
        padding: 10
    },
    listItem:{ 
        flex: 1, 
        backgroundColor: "#EDEDED",
        marginBottom: 7,
        borderRadius: 10,
        borderColor: "#EDEDED",
    },
    titleItem: {
        color: "#707D82" 
    }
})