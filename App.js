
import { useEffect, useState } from 'react';
import { Portada } from './src/components/Portada.js'
import { Login } from './src/components/Login.js';
import { findAllUsers } from './src/services/Users.js';
import { Profile } from './src/components/Profile.js';


export default function App() {

  const [portad, setPortad] = useState(true)
  const [listaUsuarios, setListaUsuarios] = useState([])
  const [autenticado, setAutenticado] = useState(false)
  const[alerta,setAlerta]=useState(false)

  const consulta = async () => {
    const Usuarios = await findAllUsers()
    setListaUsuarios(Usuarios)

  }
  useEffect(() => {

    consulta()
    setTimeout(() => {

      setPortad(false)

    }, 8000);
  }, [])

  const LoginValidation = (params) => {

    const UserLog = params

    const validacion = listaUsuarios.filter(user => user.usuario === params.usuario && user.contraseña === params.password)


    if (validacion != '') {
      setAutenticado(true)
      setAlerta(false)
    }
    else{
      setAlerta(true)
    }

  }

  const Deslogueo = () => {
    setAutenticado(false)
  }



  return (

    <>
      {autenticado ? (
        <Profile Deslogueo={Deslogueo} />


      ) : (
        portad ? (<Portada/>) : (<Login LoginValidation={LoginValidation} alerta={alerta} />)

      )}



    </>




  );
}

