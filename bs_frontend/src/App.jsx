import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {actions} from "./store/index"
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const h = useSelector(state => state.h)

  const increament =() => {
    dispatch(actions.increament())
  }
  const decreament = () => {
    dispatch(actions.decreament())
  }
  const addby = () => {
    dispatch(actions.addby(10))
  }
  const subby = () => {
    dispatch(actions.subby(15))
  }
  return (
    <>
    <h2>Dont go please</h2>
      <h3>{h}</h3>
      <h1>{counter}</h1>

      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>decreament</button>
      <button onClick={addby}>Increase by 10</button>
      <button onClick={subby}>subtract by 15</button>





    </>
  )
}

export default App
