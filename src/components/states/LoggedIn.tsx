import { useState } from 'react'

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <button onClick={handleLogin}>Login In</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>
        User {isLoggedIn ? `Logged in to system` : 'Logout in the system'}
      </h2>
    </div>
  )
}