import React from 'react'
import { Producto } from './Producto'

export const ListaSuper = ({productos}) => {
  return (
    // TODO: Cargar y mostrar la lista del súper
    <div>
        <h1>Lista de súper</h1>
        {productos.map((item, index) => {
            return <Producto key = {index} nombre = {item.nombre} precio = {item.precio}/>
        })}
    </div>
  )
}