import { Link } from 'react-router-dom'

const ProductCard = ({ id, image, title, price, isInCart }) => {
  return (
    <div>
      <article>
        <img src={image} alt={title} />
        <span className='show'>
          <Link to={`/products/${id}`}>Details</Link>
        </span>
      </article>
      <section>
        <p>{title}</p>
        <article>
          <p>${price}</p>
          <button style={{ backgroundColor: isInCart ? 'red' : 'green' }}>
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </article>
      </section>
    </div>
  )
}
export default ProductCard
