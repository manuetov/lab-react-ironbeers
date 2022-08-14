import { Link } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import RandomBeer from './RandomBeer'

function ListBeers() {
  
  const [allBeers, setAllBeers] = useState(null) 
  const [isFeching, setIsFeching] = useState(true)

   useEffect(() => {
      const getListOfBeers = async () => {
         try {
            const res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            console.log(res.data)
            setAllBeers(res.data)
            setIsFeching(false)
            
         } catch (error) {
            console.log(error)
         }
      }
      getListOfBeers()
   }, [])

   if (isFeching) 
      return <h2>... Loading</h2>

  return (
     <div className="">
      <button><Link to='/'>Go home</Link></button>
      {allBeers.map((beer, i) => {
         return (
            <div key={beer + i}>
               <Link to={`/beers/${beer._id}`}>
               <img src={beer.image_url} width="120px" alt="beer"/>
               <span><b>{beer.name}</b></span>
               <span><b>{beer.tagline}</b></span>
               <span>{beer.contributed_by}</span>
               </Link>
               
            </div>
         )
      } )}
      
   </div>
  )
}

export default ListBeers