import { useQuery } from "@tanstack/react-query";


const getCryptoNumber = async () => {
    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    const data = await response.json()
    return Number(data);
  }
  
export const RandomNumber = () => {
    const { data: number} = useQuery({
        queryKey: ['cryptoNumber'],
        queryFn: getCryptoNumber
        })
    return (
    <div>RandomNumber: { number }</div>
    )
}
