import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import {actions, actions2} from "./store/index"
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './components/cartItem'




function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const h = useSelector(state => state.h)
  const show = useSelector(state => state.toggleMenu.toggleMenu)
  console.log(show);
  const cart = useSelector(state => state.cartSlice.cart)


  const prods = [
    {
      name: "Camon X",
      price: 200,
      color: "grey",
      store: "Mosaic Stores",
      img: "cam1.jpeg"
    },
    {
      name: "Zavy Pro",
      price: 400,
      color: "grey",
      store: "Apple Stores",
      img: "cam2.jpeg"

    },
    {
      name: "Serio MaX",
      price: 100,
      color: "black",
      store: "Junnt Stores",
      img: "cam3.jpeg"

    },
    {
      name: "Iphone 14",
      price: 450,
      color: "silver",
      store: "Chain Stores",
      img: "cam4.jpeg"

    },
  ]

  // const increament =() => {
  //   dispatch(actions.increament())
  // }
  // const decreament = () => {
  //   dispatch(actions.decreament())
  // }
  // const addby = () => {
  //   dispatch(actions.addby(10))
  // }
  // const subby = () => {
  //   dispatch(actions.subby(15))
  // }

  const toggle = () => {
    dispatch(actions2.toggle())
  }
  return (
    <>
    <div className="products">

      {
        prods.map(prod => {
          return (
          <Product 
            name = {prod.name}
            price = {prod.price}
            color = {prod.color}
            store = {prod.store}
            img = {prod.img}

          />
          )
          

        })
      }
    

    </div>
      <div className={`cart ${show? "show" : "hide"}`}>
        <h4>Your Cart</h4>
        <div className="contents">
          {
          cart.map(item => {
            return (
              <CartItem 
                itemName = {item.name}
                itemPrice = {item.price}
                itemQty = {item.qty}
                itemColor = {item.color}
              />

            )
          })
          }
          
          <div className="total"><h3>Total:</h3></div>

        </div>

      </div>

      {/* <h1>{counter}</h1> */}

      {/* <button onClick={increament}>Increament</button>
      <button onClick={decreament}>decreament</button>
      <button onClick={addby}>Increase by 10</button>
      <button onClick={subby}>subtract by 15</button>
 */}
      <button onClick={toggle}>Show/Hide cart</button>





    </>
  )
}

export default App
