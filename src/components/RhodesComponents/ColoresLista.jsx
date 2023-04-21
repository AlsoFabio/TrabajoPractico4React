import React from 'react'

export default function ColoresLista(props) {
    const {rareza,children} = props

    const color=["","bg-dark bg-opacity-25","bg-success","bg-primary bg-opacity-75","bg-secondary","bg-warning bg-opacity-25","bg-warning"]

  return (
    <div  className={`card mx-auto ${color[rareza]}`} style={{ width: "15rem" , margin:"0.25rem"}}>
        {children}
    </div>
  )
}
