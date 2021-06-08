import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage'

import style from './style';
import api from '../../service/api';

export default function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    function handleLogin() {
        try {
            api.get(`/session?user=${user}&pswd=${password}`).then((response) => {
                if (response.data.result === 200) {
                    Toast.show(`SEJA BEM-VINDO (A), ${response.data.user.toUpperCase()}`, 5)
                    
                    AsyncStorage.setItem('@user_data', JSON.stringify(response.data))
                    
                    navigation.navigate('Axis')
                } else {
                    if (response.data.result === 404) {
                        Alert.alert('ERRO', 'O usuário informado não foi encontrado no banco de dados.\n\nRevise o campo e tente novamente.')
                    } else if (response.data.result === 401) {
                        Alert.alert('ERRO', `Senha incorreta para o usuário < ${user.toUpperCase()} >`)
                    }
                }
            })
        } catch (error) {
            Toast.show('OPS, algo deu errado', 5)
        }
    }

    return (
        <View style={style.container}>
            <Image style={style.icon} source={require('../../../assets/icon.png')} />

            <Text style={style.label}>EMAIL ou USUÁRIO</Text>
            <TextInput style={style.input} keyboardType={'email-address'} autoCorrect={false} autoCapitalize={'none'} onChangeText={(text) => setUser(text)} value={user} />

            <Text style={style.label}>SENHA</Text>
            <TextInput style={style.input} secureTextEntry={true} autoCorrect={false} onChangeText={(text) => setPassword(text)} value={password} />

            <TouchableOpacity style={style.button} onPress={handleLogin}>
                <Text style={style.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Sign Up')}>
                <Text style={style.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}
