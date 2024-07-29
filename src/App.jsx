import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { RandomNumber } from './components/RandomNumber';
import { useRandom } from './hooks/useRandom';
//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new


function App() {

  const { randomQuery } = useRandom();

  return (
    <>
      {
        randomQuery.isFetching ? <p>Cargando...</p > : <h1>{randomQuery.data}</h1>  
      }
      {/* <RandomNumber/> */}
      <div>{ JSON.stringify(randomQuery.error) }</div>
      <button disabled={randomQuery.isLoading} onClick={() => randomQuery.refetch() }>
        Nuevo número
      </button>
    </>
  )
}

export default App
