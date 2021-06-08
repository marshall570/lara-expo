import React from 'react'
import { FontAwesome } from 'react-native-vector-icons'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-simple-toast'

import style from './style'

export default function AxisMenu() {
    const navigation = useNavigation()

    function handleBookClick(axis) {
        navigation.navigate('Component', { axis })
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.headerText}>Selecione um eixo do conhecimento</Text>
            </View>

            <View style={{ marginBottom: 48 }}>
                <ScrollView horizontal={true} overScrollMode={'auto'} style={{ height: 450 }} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={style.iconArea} onPress={() => handleBookClick('Linguagens')}>
                        <Image source={require('./assets/lin.png')} style={style.icon} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.iconArea}  onPress={() => handleBookClick('Exatas')}>
                        <Image source={require('./assets/ex.png')} style={style.icon} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.iconArea}  onPress={() => handleBookClick('Humanas')}>
                        <Image source={require('./assets/hum.png')} style={style.icon} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.iconArea}  onPress={() => handleBookClick('Biológicas')}>
                        <Image source={require('./assets/bio.png')} style={style.icon} />
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={style.footer}>
                <TouchableOpacity style={style.footerIcon} onPress={() => Toast.show('Nenhuma novidade por enquanto 😥', 10)} onLongPress={() => Toast.show('Fique antenado!\nVeja as notícias mais recentes sobre a educação e os vestibulares', 10)}>
                    <FontAwesome name={'newspaper-o'} size={28} color='#fefefe' />
                    <Text style={style.footerText}>NOTÍCIAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.footerIcon} onLongPress={() => Toast.show('Clique no ícone para retomar seus estudos 😊', 10)} onPress={() => Toast.show('Você já está no menu de estudos')}>
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
