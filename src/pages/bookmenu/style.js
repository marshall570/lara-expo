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
        marginBottom: 12,
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#078eff',
        textAlign: 'center'
    },

    listArea: {
        flex: 1,
        paddingHorizontal: 16,
        marginVertical: 24
    },

    icon: {
        flex: 1,
        resizeMode: 'stretch',
        maxWidth: 64,
        maxHeight: 64,
        marginHorizontal: 12,
    },

    '60bf6ea74c1cba0015012921': {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#078eff',
        borderRadius: 16,
        marginVertical: 12,
        height: 86
    },

    '60bf6ea74c1cba0015012921Text': {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 28,
        marginHorizontal: 12,
        color: '#eaeaea'
    },

    '60bf6ebe4c1cba0015012922': {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#078eff',
        borderRadius: 16,
        marginVertical: 12,
        height: 86
    },

    '60bf6ebe4c1cba0015012922Text': {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 28,
        marginHorizontal: 12,
        color: '#eaeaea'
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
