import { Link } from 'react-router-dom'
import styles from '../css/navbar.module.css'

const NavBar = () => {
  return (
    <header className={styles.main}>
      <div>
        <Link to='/'>
          <p>
            <span>F</span>akeStore
          </p>
        </Link>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>Cart</Link>
        </nav>
      </div>
    </header>
  )
}
export default NavBar
