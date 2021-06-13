import React, { useEffect, useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, Text, TouchableOpacity,  Image, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'

import style from './style'
import api from '../../service/api'

export default function ComponentMenu() {
    const navigation = useNavigation()
    const route = useRoute()
    const axis = route.params.axis

    const [components, setComponents] = useState([])

    async function loadComponents() {
        const response = await api.get(`/component?axis=${axis}`)

        setComponents([...response.data])                    
    }

    function navigateContents(component) {
        navigation.navigate('Content', { component })
    }

    useEffect(() => {
        loadComponents()
    }, [])

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.headerText}>Selecione uma disciplina</Text>
            </View>

            <View style={style.listArea}>
                <FlatList
                    data={components}
                    keyExtractor={component => String(component._id)}
                    renderItem={({ item: component }) => (
                        <TouchableOpacity style={style.button} onPress={() => navigateContents(component._id)}>
                            <Image source={{uri: `https://lara-icons.s3-sa-east-1.amazonaws.com/${component._id}.png`, cache: 'force-cache'}} style={style.icon} />
                            <Text style={style.buttonText}>{component.name}</Text>
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
