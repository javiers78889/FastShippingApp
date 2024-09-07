import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../estilos/estilos'

export const Profile = ({ Deslogueo }) => {
    return (
        <LinearGradient
            colors={['#FFD700', '#000000', '#000000']} // Amarillo, gris, negro
            style={styles.container}
            start={{ x: 1, y: 0 }} // Punto de inicio del gradiente
            end={{ x: 1, y: 1.2 }} // Punto final del gradiente
        >

            <Text>Perfil</Text>

            <TouchableOpacity onPress={Deslogueo}>
                <Text>Salir</Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}
