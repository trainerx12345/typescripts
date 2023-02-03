import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
  //name of event    define the type of even based on the HTMLelement , pass a paramter , void = no return
}
export const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 1)}>Click</button>
    </div>
  )
}