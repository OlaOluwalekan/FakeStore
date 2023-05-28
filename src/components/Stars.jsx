import { FaStar } from 'react-icons/fa'

const Stars = ({ rate }) => {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <FaStar
            key={num}
            style={{ color: Math.round(rate) >= num ? 'green' : 'gray' }}
          />
        )
      })}
    </span>
  )
}
export default Stars
