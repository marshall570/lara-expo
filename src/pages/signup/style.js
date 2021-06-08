import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 24,
        backgroundColor: '#fafafa',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    backIcon: {
        position: 'absolute',
        left: 0
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 48,
        color: '#078eff',
    },

    formArea: {
        flex: 1,
        marginTop: 72
    },

    label: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#078eff',
        marginTop: 18,
        marginBottom: 6,
        alignSelf: 'flex-start'
    },

    input: {
        borderWidth: 1.5,
        borderRadius: 6,
        borderStyle: 'solid',
        borderColor: '#1f2126',
        textAlignVertical: 'center',
        fontSize: 24,
        width: '100%',
        paddingHorizontal: 4,
        paddingVertical: 4,
        backgroundColor: '#fff'
    },

    button: {
        borderRadius: 6,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#078eff',
        width: '100%',
        maxHeight: 48,
        marginTop: 28,
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ffffff'
    }
})
