import { Link } from 'react-router-dom'
import styles from '../css/home.module.css'

const Home = () => {
  return (
    <div className={styles.main}>
      <div>
        <section>
          <h2>
            Shop for <span>Fake</span>
          </h2>
          <p>Welcome to your No. 1 store</p>
          <article>
            <Link to='/products'>See Products</Link>
            <Link to='/cart'>Check My Cart</Link>
          </article>
        </section>
      </div>
    </div>
  )
}
export default Home
