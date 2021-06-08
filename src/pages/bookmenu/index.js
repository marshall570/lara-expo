import React, { useEffect, useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, ScrollView, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { WebView } from 'react-native-webview'
import Toast from 'react-native-simple-toast'

import style from './style'
import api from '../../service/api'

export default function BookMenu() {
    const navigation = useNavigation()
    const route = useRoute()

    const {content, name} = route.params

    const html_file = {
        "6c274a9874b9": require('./html/6c274a9874b9.html'),
        "7fe72068c049": require('./html/7fe72068c049.html'),
        "696a71c91436": require('./html/696a71c91436.html'),
        "5430defb1672": require('./html/5430defb1672.html'),
        "796377e7da0e": require('./html/796377e7da0e.html'),
        "a75af6bc8793": require('./html/a75af6bc8793.html'),
        "b86d4359a903": require('./html/b86d4359a903.html'),
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.headerText}>{name}</Text>            
            </View>

            <WebView style={{backgroundColor: '#fafafa'}} scalesPageToFit={false} source={html_file[content]}></WebView>

            <View style={style.footer}>
                <TouchableOpacity style={style.footerIcon} onPress={() => Toast.show('Nenhum material extra cadastrado para este conteúdo.', 10)} onLongPress={() => Toast.show('Clique aqui para ver materiais extras e recomendações que podem te ajudar a fixar melhor este conteúdo', 10)}>
                    <FontAwesome name='plus' size={28} color='#fefefe' />
                    <Text style={style.footerText}>EXTRAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para retomar seus estudos 😊', 10)} onPress={() => navigation.navigate('Axis')}>
                    <FontAwesome name='book' size={28} color='#fefefe' />
                    <Text style={style.footerText}>ESTUDOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para realizar a atividade deste conteúdo.', 10)} onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome name='file' size={28} color='#fefefe' />
                    <Text style={style.footerText}>ATIVIDADE</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
