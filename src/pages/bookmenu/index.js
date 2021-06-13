import React from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview'
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-async-storage/async-storage'

import style from './style'
import api from '../../service/api'

export default function BookMenu() {
    const navigation = useNavigation()
    const route = useRoute()

    const { content, name } = route.params

    function navigateQuestion(content) {
        api.get(`/question?content=${content}`).then((response) => {
            const [data] = response.data

            if (data === undefined) {
                Toast.show('Ainda não existem perguntas cadastradas para esse conteúdo, volte mais tarde.')
            } else {
                AsyncStorage.setItem('@question', JSON.stringify(data))

                navigation.navigate('Question')
            }
        })
    }

    function navigateExtra(content) {
        api.get(`/extra?content=${content}`).then((response) => {
            const [data] = response.data

            if (data === undefined) {
                Toast.show('Ainda não existem materiais extras cadastrados para esse conteúdo, volte mais tarde.')
            } else {
                AsyncStorage.setItem('@extra', JSON.stringify(data))

                navigation.navigate('Extra')
            }
        })
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.headerText}>{name.toUpperCase()}</Text>
            </View>

            <WebView style={{ backgroundColor: '#fafafa' }} scalesPageToFit={false} source={{ uri: `https://lara-pages.s3-sa-east-1.amazonaws.com/${content}.html` }}></WebView>

            <View style={style.footer}>
                <TouchableOpacity style={style.footerIcon} onPress={() => navigateExtra(content)} onLongPress={() => Toast.show('Clique aqui para ver materiais extras e recomendações que podem te ajudar a fixar melhor este conteúdo', 10)}>
                    <FontAwesome name='plus' size={28} color='#fefefe' />
                    <Text style={style.footerText}>EXTRAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para retomar seus estudos 😊', 10)} onPress={() => navigation.navigate('Axis')}>
                    <FontAwesome name='book' size={28} color='#fefefe' />
                    <Text style={style.footerText}>ESTUDOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para realizar a atividade deste conteúdo.', 10)} onPress={() => navigateQuestion(content)}>
                    <FontAwesome name='file' size={28} color='#fefefe' />
                    <Text style={style.footerText}>ATIVIDADE</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
