import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../estilos/estilos'
import { LinearGradient } from 'expo-linear-gradient'
import fastImage from '../img/fast.png'
export const Login = () => {
    
    return (
        <View style={styles.container}>
            <Image source={fastImage} style={styles.image} />
            <LinearGradient
                colors={['#ffffff', '#e0e0e0', '#ffffff']} // Colores para el degradado neón blanco
                start={{ x: 0.5, y: 0 }} // Inicia en el centro superior
                end={{ x: 0.5, y: 1 }}   // Termina en el centro inferior
                style={styles.gradient}
            >
                <TextInput style={styles.input}
                    value={''}
                    onChangeText={''}
                    placeholder="User" />
                <TextInput style={styles.input}
                    value={''}
                    onChangeText={''}
                    placeholder="Password" />
            </LinearGradient>

            <TouchableOpacity style={styles.roundButton}  >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
           
                <Text style={styles.buttonContacto}>Contacto</Text>
            
        </View>
    )
}
