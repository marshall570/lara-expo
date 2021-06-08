import React, { useEffect, useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, ScrollView, Text, TouchableOpacity, Alert, Image, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'

import style from './style'
import api from '../../service/api'

export default function ComponentMenu() {
    const icons = {
        "484c7ec0": require('./assets/484c7ec0.png'),
        "899f0610": require('./assets/899f0610.png'),
        "2823bcc0": require('./assets/2823bcc0.png'),
        "4487af26": require('./assets/4487af26.png'),
        "6626664c": require('./assets/6626664c.png'),
        "b16cb467": require('./assets/b16cb467.png'),
        "c6c14948": require('./assets/c6c14948.png'),
        "d8800211": require('./assets/d8800211.png'),
        "fd346ca7": require('./assets/fd346ca7.png'),
    }

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
                {/* <TouchableOpacity onPress={() => navigation.goBack()} style={style.backIcon}>
                    <FontAwesome name='arrow-left' size={24} color='#078eff' />
                </TouchableOpacity> */}

                <Text style={style.headerText}>Selecione uma disciplina</Text>
            </View>

            <View style={style.listArea}>
                <FlatList
                    data={components}
                    keyExtractor={component => String(component._id)}
                    renderItem={({ item: component }) => (
                        <TouchableOpacity style={style.button} onPress={() => navigateContents(component._id)}>
                            <Image source={icons[component.id]} style={style.icon}></Image>
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
