import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
          <Route path='products/:productId' element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
