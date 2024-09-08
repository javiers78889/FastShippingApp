import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../estilos/estilos.js'
import { LinearGradient } from 'expo-linear-gradient'
import { buttons } from '../estilos/buttons.js'

export const Profile = ({ Deslogueo }) => {
    return (
        <LinearGradient
            colors={['#FFD700', '#000000', '#000000']} // Amarillo, gris, negro
            style={styles.container}
            start={{ x: 1, y: 0 }} // Punto de inicio del gradiente
            end={{ x: 1, y: 1.2 }} // Punto final del gradiente
        >
            <Text>Bienvenido </Text>
            <View style={buttons.container}>
                <View style={buttons.subContainer}>
                    <Text style={buttons.dash}>Usuario |</Text>
                    <Text style={buttons.dash}>Nombre |</Text>
                    <Text style={buttons.dash}>Paquetes Recibidos |</Text>
                    <Text style={buttons.dash}>Plan</Text>
                </View>
                <View style={buttons.subContainer}>
                    <Text >AGS/566 |</Text>
                    <Text>Nombre |</Text>
                    <Text >Paquetes Recibidos |</Text>
                    <Text >Plan</Text>
                </View>
            </View>
            <TouchableOpacity onPress={Deslogueo} style={buttons.salir}>
                <Text style={buttons.texto}>Salir</Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}
