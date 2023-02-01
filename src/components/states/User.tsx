import { useState } from 'react'

type AuthUser = {
  name: string,
  email: string
}

export const User = () => {
  //the angle brackets give us an option whether a null or an object to be used in useState
  const [user, setUser] = useState<AuthUser | null>(null)
  //type assertion sample for states
  /*   
  this makes the type assertion to bypass if logout is not possible to the environment to empty 
  ! const [user, setUser] = useState<AuthUser>({} as AuthUsers)
  this consider be using if there is no value in initial load
  */
  const handleLogin = () => {
    setUser({
      name: 'Louise Bane',
      email: 'Louise@sampl.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>
        Login
      </button>
      <button onClick={handleLogout}>
        Logout
      </button>
      <h2>
        User name is {user?.name}
      </h2>
      <h2>
        User email is {user?.email}
      </h2>
    </div>
  )
}