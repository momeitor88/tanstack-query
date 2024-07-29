import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
//https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function AppClassic() {

  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then(response => response.json())
    .then(data => {
      setCount(data);
      setLoading(false);
    })
    .catch(error =>  setError(error))
    .finally(() => setLoading(false)
    )
  }, [refresh])
  
  return (
    <>
      {
        isLoading ? <p>Cargando...</p > : <h1>{count}</h1>  
      }
      <div>{ error }</div>
      <button disabled={isLoading} onClick={() => setRefresh(refresh + 1) }>
        Nuevo número
      </button>
    </>
  )
}

export default AppClassic
