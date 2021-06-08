import React, { useState } from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'

import style from './style'
import api from '../../service/api'

export default function SignUp() {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

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
                        api.post('/user', values).then((response) => {
                            if (response.status === 201) {
                                Alert.alert('CADASTRADO', 'Usuário criado com sucesso, retornando à tela de Login.')

                                navigation.goBack()
                            } else {
                                Toast.show('Algo de errado aconteceu, tente novamente')
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backIcon}>
                    <FontAwesome name='arrow-left' size={28} color='#078eff' />
                </TouchableOpacity>

                <Text style={style.headerText}>CADASTRO</Text>
            </View>

            <View style={style.formArea}>
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
