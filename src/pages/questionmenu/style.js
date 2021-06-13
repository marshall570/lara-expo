import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 24,
        backgroundColor: '#fafafa',
        justifyContent: 'center'
    },

    question: {
        flex: 1,        
        marginBottom: 18,
        borderRadius: 8,
        backgroundColor: '#fff',        
        elevation: 2,
    },

    questionText: {
        fontSize: 18,
        textAlign: 'justify',
        margin: 14
    },

    answers: {
        flex: 2,
        marginBottom: 18
    },

    answerButton: {
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 2,
        marginVertical: 8,
        padding: 12
    },

    answerText: {
        fontSize: 18,
        textAlign: 'justify',
    },

    hearts: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    }

})
