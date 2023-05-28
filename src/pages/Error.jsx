import { Link } from 'react-router-dom'
import styles from '../css/error.module.css'

const Error = () => {
  return (
    <div className={styles.main}>
      <img
        src='https://i.ibb.co/dgr7MWn/page-not-found-error-404.png'
        alt='page-not-found-error-404'
        border='0'
      />
      <h3>Oops! This page does not exist</h3>
      <Link to='/'>Go Home</Link>
      <Link to='/products'>Show me products</Link>
    </div>
  )
}
export default Error
