import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navbar p-5">
        <Link to='/'>Home</Link>   
        <Link to='/beers'>List of Beers</Link>
        <Link to='/random-beer'>Random Beer</Link>
        <Link to='/new-beer'>New Beer</Link>
      </div>
    </div>
  )
}

export default Navbar