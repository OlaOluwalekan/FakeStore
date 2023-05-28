import ProductCard from '../components/ProductCard'
import { useGlobalContext } from '../context'
import styles from '../css/products.module.css'

const Products = () => {
  const { products, loading } = useGlobalContext()

  return (
    <div className={styles.main}>
      <div>
        <h2>Shop from our fake products below</h2>
        <section>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            products.map((product) => {
              return <ProductCard key={product.id} {...product} />
            })
          )}
        </section>
      </div>
    </div>
  )
}
export default Products
