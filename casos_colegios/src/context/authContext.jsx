import { createContext, useContext, useState } from "react"
import { loginService, registerService } from "../services/usuariosService"

const Context = createContext({})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(window.localStorage.getItem("user")))
  const [state, setState] = useState({ error: false, loading: false })

  const login = ({ email, password }) => {
    setState({ error: false, loading: true })
    loginService({ email, password })

      .then(data => {
        window.localStorage.setItem("user", JSON.stringify(data))
        setUser(data)
        setState({ error: false, loading: false })
      })
      .catch(error => {
        console.log(error)
        setState({ error: true, loading: false })
      })
  }

  const register = ({
    apellido,
    nombre,
    edad,
    rol,
    email,
    password
  }) => {
    registerService({
      apellido,
      nombre,
      edad,
      rol,
      email,
      password
    })
      .catch(error => console.log(error))
  }

  const logout = () => {
    setUser()
    console.log(user)
    window.localStorage.removeItem("user")
  }

  return (
    <Context.Provider value={{
      user,
      isLogged: Boolean(user),
      login,
      register,
      state,
      logout
    }}>
      {children}
    </Context.Provider>
  )
}


export const useAuth = () => {
  const { user, login, register, isLogged, state, logout } = useContext(Context)
  return {
    user, login, register, isLogged, state, logout
  }
}
