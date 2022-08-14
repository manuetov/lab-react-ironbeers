import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


function NewBeer() {

  const navigate = useNavigate()

  // state to save form
  const [ addBeer, setAddBeer ] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  })

  // handdleSubmit to fill up value form 
  const handdleChange = (e) => {
    console.log(e.target.name)


    const stateClone = {...addBeer}
    stateClone[e.target.name] = e.target.value
    setAddBeer(stateClone)

  }

  const handdleSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', addBeer)
      console.log('beer added');
      navigate('/beers')

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button><Link to='/'>Go home</Link></button>

      <form onSubmit={handdleSubmit}>

        <input type="text" name="name" onChange={handdleChange} value={addBeer.name} placeholder="Name"/>
        <input type="text" name='tagline' onChange={handdleChange}  value={addBeer.tagline} placeholder="tagline"/>
        <input type="text" name='description' onChange={handdleChange}  value={addBeer.description} placeholder="description"/>
        <input type="text" name='first_brewed' onChange={handdleChange} value={addBeer.first_brewed} placeholder="first_brewed"/>
        <input type="text" name='brewers_tips' onChange={handdleChange}  value={addBeer.brewers_tips} placeholder="brewers_tips"/>
        <input type="text" name='attenuation_level' onChange={handdleChange}value={addBeer.attenuation_level}  placeholder="attenuation_level "/>
        <input type="text" name='contributed_by' onChange={handdleChange} value={addBeer.contributed_by} placeholder="contributed_by "/>

        <button>Add Beer</button>

      </form>
    </div>
  )
}

export default NewBeer