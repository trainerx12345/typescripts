

type GreetProps = {
  name: string,
  messageCount?: number, //? States the message count is Optional
  isLoggedIn: boolean
}

const Greet2 = (props: GreetProps) => {
  //Set default value for the messageCount to be 0
  const { messageCount = 20 } = props
  return (
    <div>
      {props.isLoggedIn ?
        <div>
          <h2> Hello ! Welcome {props.name}</h2>
          <p> Greetings you have {messageCount}</p>
          <p>You have successfully log-in into the system. Greet2.tsx</p>
        </div>
        :
        <div>
          <h2>Welcome Guest!</h2>
          <p>Go home and cook some dinner. Greet2.tsx</p>
        </div>
      }
    </div>
  )
}

export default Greet2