import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})

  const getProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios('http://localhost:3000/products')
      // console.log(data)
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const getProductDetails = async (id) => {
    try {
      setLoading(true)
      const { data } = await axios(`http://localhost:3000/products/${id}`)
      // console.log(data)
      setProduct(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <AppContext.Provider
      value={{ loading, products, product, getProductDetails }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
