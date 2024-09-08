import { StyleSheet } from "react-native";

export const buttons= StyleSheet.create({
    salir:{

        backgroundColor:'red',
        width:'100%',
        alignItems:'center',
        justifyContent:"center",
        paddingVertical:10,
    }
    ,
    texto:{
        fontSize:20
    },
    container: {
        
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding:30,
        marginBottom:50,
        borderRadius:20,
        
      },
      subContainer:{
        flexDirection:'row',
        gap:5
      },

      dash:{
        fontWeight:'bold',
        fontSize:15
      }


})