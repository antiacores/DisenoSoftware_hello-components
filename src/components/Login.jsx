import { useState } from "react"
import React from 'react'

const USER_CREDENTIALS = {
    username: 'admin',
    password: 'admin'
}

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
            alert("Inicio de sesión exitoso")
            setUsername('')
            setPassword('')
            setError('')
        } else {
            alert("Usuario o contraseña incorrecto")
            setUsername('')
            setPassword('')
            setError('Usuario o contraseña incorrectos')
        }
    }

  return (
    <div>
        <h1>Iniciar sesión</h1>
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "username">Usuario: </label>
                <input 
                    type = "text" 
                    name = "username"
                    id = "username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor = "password">Contraseña: </label>
                <input 
                    type = "password" 
                    name = "password"
                    id = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
            </div>
            <p></p>
            <button type = "submit">Iniciar sesión</button>
            {error && <p style = {{color: 'red'}}>{error}</p>}
        </form>
    </div>
  )
}