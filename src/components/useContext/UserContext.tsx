import { createContext, useState } from 'react'


type AuthUser = {
  name: string
  email: string
}
type UserContextType = {
  User: AuthUser | null
  setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
  children: React.ReactNode
}
// export const UserContext = createContext<UserContextType| null>(null)
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [User, setUser] = useState<AuthUser | null>(null)
  
  return <UserContext.Provider value={{ User, setUser }}>
    {
      children
    }
  </UserContext.Provider>
}