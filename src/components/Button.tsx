import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
  //name of event    define the type of even based on the HTMLelement , pass a paramter , void = no return
}
export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
    </div>
  )
}