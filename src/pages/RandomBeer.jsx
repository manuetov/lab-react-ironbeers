import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RandomBeer(props) {
  console.log(props);
  const [ randomBeer, setRandomBeer ] = useState(null)
  const [ isFetching, setIsFetching ] = useState(true)

  useEffect(() => {
    const fetchRandomBeer = async () => {
      const res = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      console.log(res.data);
      setRandomBeer(res.data)
      setIsFetching(false)
    }
    fetchRandomBeer()
  }, [])

  if (isFetching)
    return <h2>... loading</h2>

    const { name, tagline, image_url, first_brewed, attenuation_level, description, contributed_by} = randomBeer

  return (
    <div>   
      <button><Link to='/beers'>Go back</Link></button>
      <img src={image_url} width='30%' alt='beer'/>
      <h3>{name}</h3>
      <span><b>{tagline}</b></span>
      <span>{first_brewed}</span>
      <p>{attenuation_level}</p>
      <p>{description}</p>
      <p>{contributed_by}</p>
   </div>
  )
}

export default RandomBeer