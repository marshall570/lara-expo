import React, { useEffect, useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'

import style from './style'
import api from '../../service/api'

export default function ExtraMenu() {
    const navigation = useNavigation()
    const route = useRoute()
    const content = route.params.content

    const [extras, setExtras] = useState([])

    async function loadExtras() {
        const response = await api.get(`/extra?axis=${content}`)

        setExtras([...response.data])                    
    }

    useEffect(() => {
        loadExtras()
    }, [])

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backIcon}>
                    <FontAwesome name='arrow-left' size={24} color='#078eff' />
                </TouchableOpacity>

                <Text style={style.headerText}>CONTEÚDO EXTRA</Text>
            </View>

            <View style={style.listArea}>
                <FlatList
                    data={extras}
                    keyExtractor={extras => String(extras._id)}
                    renderItem={({ item: extras }) => (
                        <TouchableOpacity style={style.button}>                            
                            <Text style={style.buttonText}>{extras.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={style.footer}>
                <TouchableOpacity style={style.footerIcon} onPress={() => Toast.show('Nenhuma novidade por enquanto 😥', 10)} onLongPress={() => Toast.show('Fique antenado!\nVeja as notícias mais recentes sobre a educação e os vestibulares', 10)}>
                    <FontAwesome name={'newspaper-o'} size={28} color='#fefefe' />
                    <Text style={style.footerText}>NOTÍCIAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para retomar seus estudos 😊', 10)} onPress={() => navigation.navigate('Axis')}>
                    <FontAwesome name='book' size={28} color='#fefefe' />
                    <Text style={style.footerText}>ESTUDOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para alterar as informações do seu perfil ✏️', 10)} onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome name='user' size={28} color='#fefefe' />
                    <Text style={style.footerText}>PERFIL</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
