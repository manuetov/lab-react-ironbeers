import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h2>Pagnia no encontrada</h2>
      <button><Link to='/beers'>Go back</Link></button>
    </div>
  )
}

export default ErrorPage