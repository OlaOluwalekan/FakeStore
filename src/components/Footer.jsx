import { Link } from 'react-router-dom'
import styles from '../css/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div>
        <p>FakeStore</p>
        <p>&copy; Imagine Media 2023</p>
        <article>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/cart'>Cart</Link>
        </article>
      </div>
    </footer>
  )
}
export default Footer
