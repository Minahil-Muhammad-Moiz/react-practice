import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

const Project = () => {
  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['cat'],
    queryFn: async () => {
    return await Axios.get('https://catfact.ninja/fact').then((res)=>res.data)
  }})

  
  return (
    <div className='Card'>
      <h1>Generate CatFact</h1>
      {isLoading && 'Loading...'}
      {isError && `Oops! Something went wrong.`}
      <p>{data?.fact}</p>
      <button onClick={refetch}>New Fact</button>
    </div>
  )
}

export default Project