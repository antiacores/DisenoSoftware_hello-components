import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ListaSuper } from './components/ListaSuper'

const PRODUCTOS = [
  { nombre: "manzana", precio: 5 },
  { nombre: "plátano", precio: 3 },
  { nombre: "leche", precio: 20 },
  { nombre: "arroz", precio: 15 },
  { nombre: "pan", precio: 12 },
  { nombre: "huevos", precio: 30 },
  { nombre: "pollo", precio: 70 },
  { nombre: "pasta", precio: 10 },
  { nombre: "café", precio: 50 },
  { nombre: "yogur", precio: 8 }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title = {"Mi primer componente =D"} color = {'pink'}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ListaSuper productos = {PRODUCTOS}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
