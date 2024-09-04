import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 140, // Ajusta el tamaño de la imagen según sea necesario
    height: 140,
    marginBottom: 20, // Espacio entre la imagen y el texto
    shadowColor: '#FFFFFF', // Color de la sombra
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.8, // Opacidad de la sombra
    shadowRadius: 4, // Radio de la sombra
    elevation: 5
  },
  text: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 40, // Tamaño del texto
    textAlign: 'center', // Alinea el texto al centro
    fontWeight: 'bold', // Negrita para hacer el texto más prominente
    textShadowColor: '#FF00FF', // Color del resplandor (magenta)
    textShadowOffset: { width: 0, height: 0 }, // Desplazamiento de la sombra (sin desplazamiento)
    textShadowRadius: 10,
  },
  button: {

    borderRadius: 50, // Para hacer el botón redondo
    borderWidth: 1,
    borderColor: '#FFFF00', // Color amarillo neón
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  output: {
    fontSize: 16,
  },
  gradient: {
    width: '80%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#ffffff', // Sombra blanca para dar efecto de neón
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10, // Sombra en Android

  },
  roundButton: {
    width: 300,
    height: 50,
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Fondo blanco
    borderRadius: 40, // Mitad del ancho/alto para hacerlo redondo
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20, // Radio de la sombra para el efecto neón
    elevation: 10, // Sombra en Android
  },
  buttonText: {
    fontSize: 15,
    color: '#000000', // Color del texto negro

  },
  buttonContacto: {
    fontSize: 15,
    color: '#FFFFFF', // Color del texto negro,
    marginTop:10

  },
});
