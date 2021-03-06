import React, { useEffect, useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'expo-image-picker'

import api from '../../service/api'
import style from './style'

export default function Profile() {
    const navigation = useNavigation()

    const [id, setId] = useState()
    const [name, setName] = useState()
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [pic, setPic] = useState(null)

    const photo = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })

        if (!result.cancelled) {
            const form_data = new FormData()
            
            const type = 'image/png'
            const new_name = `${id}.png`
            
            form_data.append('file', { uri: result.uri, name: new_name, type })
            
            api.post('/pic', form_data, {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            })            
        }

    }

    AsyncStorage.getItem('@user_data').then((data) => {
        data = JSON.parse(data)

        setId(data.id)
        setName(data.name)
        setUser(data.user)
        setEmail(data.email)
        setPassword(data.password)
        setPic(`https://lara-profile-pics.s3-sa-east-1.amazonaws.com/${data.id}.png`)
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

                    <TouchableOpacity onPress={() => photo()} style={style.pic}>
                        {pic && <Image source={{ uri: pic, cache: 'reload', headers: {Pragma: 'no-cache'} }} style={style.pic}/>}
                    </TouchableOpacity>

                    <View style={style.info}>
                        <View>
                            <Text style={style.labelPic}>NOME</Text>
                            <TextInput style={style.infoPic} editable={false} value={name} />
                        </View>

                        <View>
                            <Text style={style.labelPic}>USU??RIO</Text>
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
                <TouchableOpacity style={style.footerIcon} onPress={() => Toast.show('Nenhuma novidade por enquanto ????', 10)} onLongPress={() => Toast.show('Fique antenado!\nVeja as not??cias mais recentes sobre a educa????o e os vestibulares', 10)}>
                    <FontAwesome name={'newspaper-o'} size={28} color='#fefefe' />
                    <Text style={style.footerText}>NOT??CIAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ??cone para retomar seus estudos ????', 10)} onPress={() => navigation.navigate('Axis')}>
                    <FontAwesome name='book' size={28} color='#fefefe' />
                    <Text style={style.footerText}>ESTUDOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ??cone para alterar as informa????es do seu perfil ??????', 10)} onPress={() => Toast.show('Voc?? j?? est?? na p??gina do perfil')}>
                    <FontAwesome name='user' size={28} color='#fefefe' />
                    <Text style={style.footerText}>PERFIL</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
