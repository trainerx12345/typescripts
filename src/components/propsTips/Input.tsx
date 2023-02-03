import React from 'react'
import { InputProps } from './Input.type'


export const Input = ({ value, handleChange }: InputProps) => {
  /*
  //define within the component
   const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event)
  }*/

  return (
    <div>
      {/* This is pass via Props */}
      <input type='text' value={value} onChange={handleChange} />
      {/* handleInputChange */}

    </div>
  )
}
