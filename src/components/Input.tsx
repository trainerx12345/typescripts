import React from 'react'

type InputProps = {
  value:string,
  handleChange : (event:React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
  /*
  //define within the component
   const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event)
  }*/

  return (
    <div>
      {/* This is pass via Props */}
<input type='text' value={props.value} onChange={props.handleChange} /> 
{/* handleInputChange */}

    </div>
  )
}