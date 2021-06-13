import React, { useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'
import * as ImagePicker from 'expo-image-picker'

import style from './style'
import api from '../../service/api'

export default function SignUp() {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [pic, setPic] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/150px-Placeholder_no_text.svg.png')


    const photo = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })

        if (!result.cancelled) {
            setPic(result.uri)
        }

    }

    function handleSignUp() {
        try {
            const values = {
                name: name.trim(),
                user: user.trim(),
                email: email.trim(),
                password: password.trim()
            }

            if (verifyValues(values)) {
                if (password.length >= 8) {
                    if (password === confirm) {
                        Toast.show('Enviando dados, aguarde...')

                        api.post('/user', values).then((response) => {
                            if (response.data.result === 'user') {
                                Alert.alert('ERRO', 'Já existe um registro com esse usuário.')
                            } else if (response.data.result === 'mail') {
                                Alert.alert('ERRO', 'Já existe um registro com esse email.')
                            } else {
                                const form_data = new FormData()
                                const type = 'image/png'

                                const new_name = `${response.data._id}.png`

                                form_data.append('file', { uri: pic, name: new_name, type })

                                api.post('/pic', form_data, {
                                    headers: {
                                        'content-type': 'multipart/form-data',
                                    }
                                })

                                Toast.show('Usuário cadastrado com sucesso, voltando para a tela de login...')
                                navigation.goBack()
                            }
                        })
                    } else {
                        Alert.alert('ERRO', 'As senhas não conferem.\nDigite-as novamente.')
                    }
                } else {
                    Alert.alert('ERRO', 'A senha precisa ter ao menos 8 caracteres.')
                }
            } else {
                Alert.alert('ERRO', 'Alguns campos não foram preenchidos corretamente.\nPreencha-os novamente.')
            }
        } catch (error) {
            Toast.show(`ERRO: ${error}`, 5)
        }
    }

    function verifyValues(values) {
        for (let index = 0; index < values.length; index++) {
            if (values.value === '' || values.value === null || values.value === undefined) {
                return false
            }
        }

        return true
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name='arrow-left' size={28} color='#078eff' />
                </TouchableOpacity>

                <Text style={style.headerText}>CADASTRO</Text>

                <TouchableOpacity onPress={() => photo()}>
                    <FontAwesome name='camera' size={28} color='#078eff' />
                </TouchableOpacity>
            </View>

            <View style={style.formArea}>
                <View style={style.picArea}>
                    {pic && <Image source={{ uri: pic, cache: 'reload' }} style={style.pic}></Image>}
                </View>

                <Text style={style.label}>NOME</Text>
                <TextInput style={style.input} placeholder={'Marshall Lee'} onChangeText={(text) => setName(text)} value={name} autoCapitalize={'words'} autoCorrect={false} />

                <Text style={style.label}>USUÁRIO</Text>
                <TextInput style={style.input} placeholder={'marshall570'} onChangeText={(text) => setUser(text)} value={user} autoCapitalize={'none'} autoCorrect={false} />

                <Text style={style.label}>EMAIL</Text>
                <TextInput style={style.input} placeholder={'marshall570@protonmail.com'} onChangeText={(text) => setEmail(text)} value={email} autoCapitalize={'none'} keyboardType={'email-address'} autoCorrect={false} />

                <Text style={style.label}>SENHA</Text>
                <TextInput style={style.input} placeholder={'Ao menos 8 caracteres'} onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} autoCorrect={false} />

                <Text style={style.label}>CONFIRMAR SENHA</Text>
                <TextInput style={style.input} placeholder={'Repita a senha para verificar erros'} onChangeText={(text) => setConfirm(text)} value={confirm} secureTextEntry={true} autoCorrect={false} />

                <TouchableOpacity style={style.button} onPress={handleSignUp}>
                    <Text style={style.buttonText}>CRIAR USUÁRIO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
