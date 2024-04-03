import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

const Projects = () => {
  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['cat'],
    queryFn: async () => {
    return await Axios.get('https://catfact.ninja/fact').then((res)=>res.data)
  }})

  if (isError){
    return <h2>Sorry, there's an Error</h2>
  }

  if (isLoading){
    return <h2>Loading...</h2>
  }
  return (
    <div className='Card'>
      <h1>Generate CatFact</h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}>New Fact</button>
    </div>
  )
}

export default Projects