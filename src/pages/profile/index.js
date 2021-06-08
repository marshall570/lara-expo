import React, { useEffect, useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-async-storage/async-storage'


import style from './style'

export default function Profile() {
    const navigation = useNavigation()

    const [id, setId] = useState()    
    const [name, setName] = useState()
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    AsyncStorage.getItem('@user_data').then((data) => {
        data = JSON.parse(data)

        setId(data.id)
        setName(data.name)
        setUser(data.user)
        setEmail(data.email)
        setPassword(data.password)
    })


    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backIcon}>
                    <FontAwesome name='arrow-left' size={24} color='#078eff' />
                </TouchableOpacity>

                <Text style={style.headerText}>MEU PERFIL</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={style.backIcon}>
                    <FontAwesome name='sign-out' size={24} color='#078eff' />
                </TouchableOpacity>
            </View>

            <View style={style.profileArea}>
                <View style={style.picArea}>
                    <Image source={require('./placeholder.png')} style={style.pic}></Image>

                    <View style={style.info}>
                        <View>
                            <Text style={style.labelPic}>NOME</Text>
                            <TextInput style={style.infoPic} editable={false} value={name} />
                        </View>

                        <View>
                            <Text style={style.labelPic}>USUÁRIO</Text>
                            <TextInput style={style.infoPic} editable={false} value={user} />
                        </View>
                    </View>
                </View>

                <View style={style.dataArea}>
                    <Text style={style.label}>EMAIL</Text>
                    <TextInput style={style.input} editable={false} value={email} />

                    <Text style={style.label}>SENHA</Text>
                    <TextInput style={style.input} editable={false} secureTextEntry={true} value={password} />                                
                </View>
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

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para alterar as informações do seu perfil ✏️', 10)} onPress={() => Toast.show('Você já está na página do perfil')}>
                    <FontAwesome name='user' size={28} color='#fefefe' />
                    <Text style={style.footerText}>PERFIL</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
