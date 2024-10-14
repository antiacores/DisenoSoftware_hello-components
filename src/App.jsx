import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ListaSuper } from './components/ListaSuper'
import { Login } from './components/Login'

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
  const [lista_super, setListaSuper] = useState(false)
  const [sesion, setSesion] = useState(false)

  return (
    <>
    <Header title = {"Mi primer componente =D"} color = {'#8A6642'}/>
    {sesion ?
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <button onClick = {() => setListaSuper(!lista_super)}>
          {lista_super ? 'Ocultar lista' : 'Mostrar lista'}
        </button>
        {lista_super === true ? 
          <ListaSuper productos = {PRODUCTOS}/>
          : <p>:P</p>
        }
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <button onClick = {() => setSesion(false)}>Cerrar sesión</button>
      </div>
    : 
      <div>
        <Login setSesion = {setSesion}/>
      </div>
    }
    </>
  )
}

export default App