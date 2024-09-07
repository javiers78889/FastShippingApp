import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343541',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100
  },
  image: {
    width: 140, // Ajusta el tamaño de la imagen según sea necesario
    height: 140,
    marginBottom: 20, // Espacio entre la imagen y el texto
    alignItems:'center',
    justifyContent:'center',
    resizeMode:"contain"
  },
  alerta:{

    color:'red'

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

  output: {
    fontSize: 16,
  },
  gradient: {
    width: 300,
    padding: 20,
    alignItems: 'center',
    borderRadius: 50,
    

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
    marginTop:10, 

  },
  footer:{
    color: 'white',
    fontSize:10,
  
  },
  containerButton:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30
  },
  textos: {
    flexDirection: 'row', // Alinea los elementos en una fila
    alignItems: 'center', // Centra verticalmente
    height: 50, // Aumenta la altura para mayor comodidad
    backgroundColor: 'white', // Fondo blanco para el campo
    width: 300, // Ancho del contenedor
    borderColor: 'gray', // Color del borde
    borderWidth: 1, // Grosor del borde
    borderRadius: 25, // Redondez para hacer el input más ovalado
    paddingHorizontal: 10,
    marginBottom: 20, // Espacio entre los campos
    elevation: 10, // Sombra en Android
    shadowColor: 'white', // Sombra blanca
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
  },
  input: {
    flex: 1, // Para que el input ocupe todo el espacio restante
    paddingLeft: 10, // Separación entre el ícono y el texto
    height: '100%', // Asegura que el input ocupe toda la altura del contenedor
    borderRadius: 25, // Bordes redondeados para que coincida con el contenedor
  },
  icon: {
    // Fondo gris para el ícono
    borderRightWidth:0.5,
    borderLeftColor:'gray',
  
    justifyContent: 'center',
    alignItems: 'center', // Centra el ícono
    width: 40, // Ajusta el ancho del contenedor del ícono
    height: '50%', // Ajusta la altura del ícono al contenedor
  },

});
