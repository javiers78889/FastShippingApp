
import { useEffect, useState } from 'react';
import { Portada } from './src/components/Portada.js'
import { Login } from './src/components/Login.js';


export default function App() {

  const [portad, setPortad] = useState(true)
  useEffect(() => {
    setTimeout(() => {

      setPortad(false)

    }, 8000);
  }, [])

  return (

    <>
      {portad ? (<Portada/>) : (<Login/>)}


    </>




  );
}

