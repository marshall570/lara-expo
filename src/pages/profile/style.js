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
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#078eff',
        textAlign: 'center'
    },

    profileArea: {
        flex: 3,
    },

    picArea: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 6
    },

    pic: {
        flex: 1,
        width: 128,
        height: 128,
        borderRadius: 16,
        marginRight: 14
    },

    labelPic: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#078eff',
        alignSelf: 'flex-start'
    },

    info: {
        flex: 2,
    },

    infoPic: {
        borderWidth: 1,
        borderRadius: 6,
        borderStyle: 'solid',
        borderColor: '#1f2126',
        color: '#000',
        marginBottom: 6,
        fontSize: 20,
        width: '100%',
        paddingHorizontal: 4,
        paddingVertical: 4,
        backgroundColor: '#fff'
    },

    dataArea: {
        flex: 1,
        paddingHorizontal: 10,
    },

    label: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#078eff',
        marginBottom: 4,
        alignSelf: 'flex-start'
    },

    input: {
        borderWidth: 1,
        borderRadius: 6,
        borderStyle: 'solid',
        borderColor: '#1f2126',
        color: '#000',
        marginBottom: 16,
        fontSize: 20,
        width: '100%',
        paddingHorizontal: 4,
        paddingVertical: 4,
        backgroundColor: '#fff'
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
