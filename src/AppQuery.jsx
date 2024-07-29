import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RandomNumber } from './components/RandomNumber';
//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

const getCryptoNumber = async () => {
  // throw new Error('Error al obtener el número');
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const data = await response.json()
  return Number(data);
}

function AppQuery() {

  const { isLoading, isFetching,  data: number, error, refetch } = useQuery({
    queryKey: ['cryptoNumber'],
    queryFn: getCryptoNumber,
    retry: false,// Intentos para el fallo,
    refetchOnWindowFocus: false,
  })
  
  return (
    <>
      {
        isFetching ? <p>Cargando...</p > : <h1>{number}</h1>  
      }
      {/* <RandomNumber/> */}
      <div>{ JSON.stringify(error) }</div>
      <button disabled={isLoading} onClick={() => refetch() }>
        Nuevo número
      </button>
    </>
  )
}

export default AppQuery
