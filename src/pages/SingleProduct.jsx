import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'
import styles from '../css/single.module.css'
import PropValue from '../components/PropValue'
import Stars from '../components/Stars'

const SingleProduct = () => {
  const { productId } = useParams()
  const { getProductDetails, loading, product } = useGlobalContext()

  console.log(product)

  useEffect(() => {
    getProductDetails(productId)
  }, [])

  if (product === {}) {
    return <h2>No product</h2>
  }

  return (
    <div className={styles.main}>
      <div>
        <Link to='/products'>Back to Products</Link>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <h3>{product.title}</h3>
            <section>
              <img src={product.image} alt={product.title} />
              <article>
                <PropValue property='Category' value={product.category} />
                <PropValue property='Price' value={`$${product.price}`} />
                <PropValue
                  property='Quantity Left'
                  value={product.rating.count}
                />
                <PropValue
                  property='Rating'
                  value={
                    <span>
                      {product.rating.rate} <Stars rate={product.rating.rate} />
                    </span>
                  }
                />
              </article>
            </section>
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default SingleProduct
