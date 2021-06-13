import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: Constants.statusBarHeight + 48,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        height: 256,
        width: 256,
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
        fontSize: 20,
        width: '100%',
        paddingHorizontal: 4,
        paddingVertical: 2,
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
        marginTop: 36,
        elevation: 2
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#ffffff'
    }    
})
