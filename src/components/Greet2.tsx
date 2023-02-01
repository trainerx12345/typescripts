import PropTypes from 'prop-types'

type GreetProps = {
  name: string,
  messageCount?: number, //? States the message count is Optional
  isLoggedIn: boolean
}

const Greet2 = (props: GreetProps) => {
  //Set default value for the messageCount to be 0
  const { messageCount = 0 } = props
  return (
    <div>
      {props.isLoggedIn ?
        <div>
          <h2> Hello ! Welcome {props.name}</h2>
          <p> Greetings you have {messageCount}</p>
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
Greet2.propTypes = {}
export default Greet2