import React from 'react'

export const Header = ({title, color}) => {
  return (
    <h1 style = {{color: color ? color : '#EAE6CA'}}>
        {title ? title : ":("}
    </h1>
  )
}