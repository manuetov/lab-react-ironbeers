import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Beer() {
   const { beerId } = useParams()
   console.log(beerId)
   // state to savethe beer
   const [beerDetails, setBeerDetails] = useState()
   const [isLoading, setIsLoading] = useState(true)

   // useEffect Api get 
   useEffect(() => {
      const getBeer = async () => {
         try {
            const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            console.log(res.data)
            setBeerDetails(res.data)
            setIsLoading(false)
         } catch (error) {
            console.log(error)
         }
      }
      getBeer()
   }, [beerId])

   // CG
   if(isLoading)
      return <h2> ... is Loading</h2>

   const { name, tagline, image_url, first_brewed, attenuation_level, description, contributed_by} = beerDetails

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

export default Beer