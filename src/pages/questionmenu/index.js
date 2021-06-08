import React, { useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-simple-toast'


import style from './style'

export default function QuestionMenu() {
    const navigation = useNavigation()
    const [question, setQuestion] = useState('')
    const [altA, setAltA] = useState('')
    const [altB, setAltB] = useState('')
    const [altC, setAltC] = useState('')
    const [altD, setAltD] = useState('')
    const [answer, setAnswer] = useState('')

    function handleAnswer(value) {
        if (value === answer) {
            Alert.alert('RESPOSTA CERTA', 'PARABÉNS! Você acertou a resposta!')
        } else {
            Alert.alert('RESPOSTA ERRADA', 'Que pena! Você errou a resposta.')
        }
        
        Toast.show('Retornando para a página do conteúdo...', 5)
        navigation.goBack()
    }

    AsyncStorage.getItem('@question').then((data) => {
        data = JSON.parse(data)

        setQuestion(data.question)
        setAltA(data.alt_a)
        setAltB(data.alt_b)
        setAltC(data.alt_c)
        setAltD(data.alt_d)
        setAnswer(data.answer)
    })


    return (
        <View style={style.container}>
            <ScrollView style={style.question}>
                <Text style={style.questionText}>{question}</Text>
            </ScrollView>

            <ScrollView style={style.answers}>
                <TouchableOpacity style={style.answerButton} onPress={() => handleAnswer('a')}>
                    <Text style={style.answerText}>{`A) ${altA}`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.answerButton} onPress={() => handleAnswer('b')}>
                    <Text style={style.answerText}>{`B) ${altB}`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.answerButton} onPress={() => handleAnswer('c')}>
                    <Text style={style.answerText}>{`C) ${altC}`}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.answerButton} onPress={() => handleAnswer('d')}>
                    <Text style={style.answerText}>{`D) ${altD}`}</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={style.hearts}>
                <FontAwesome name='heart' size={36} color='#078eff' />
                <FontAwesome name='heart-o' size={36} color='#078eff' />
                <FontAwesome name='heart-o' size={36} color='#078eff' />
            </View>
        </View>
    )
}
