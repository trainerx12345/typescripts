

type GreetProps = {
  name: string,
  messageCount: number,
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ?
        <div>
          <h2> Hello ! Welcome {props.name}</h2>
          <p> Greetings you have {props.messageCount}</p>
          <p>You have successfully log-in into the system.</p>
        </div>
        :
        <div>
          <h2>Welcome Guest!</h2>
          <p>Go home and cook some dinner.</p>
        </div>
      }
    </div>
  )
}

export default Greet