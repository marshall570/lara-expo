import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 24,
        backgroundColor: '#fafafa',
        justifyContent: 'space-between'
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#078eff',
        textAlign: 'center'
    },

    iconArea: {        
        alignItems: 'center',
        justifyContent: 'center',        
    },

    icon: {
        resizeMode: 'stretch',
        maxWidth: 300,
        maxHeight: 425,
        marginHorizontal: 12,        
    },

    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 32,
        backgroundColor: '#078eff',
        width: '100%',
        maxHeight: 64,        
    },

    footerIcon: {        
        alignItems: 'center',        
    },

    footerText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#fefefe'
    }
})
