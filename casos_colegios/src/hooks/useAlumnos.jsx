import { useEffect } from "react"
import { useState } from "react"
import { findAllUsers } from "../services/usuariosService"

export const useAlumnos = () => {
  const [alumnos, setAlumnos] = useState([])

  useEffect(() => {
    findAllUsers()
      .then(data => {
        setAlumnos(data)
      })
      .catch(err => console.log(err))
  }, [])

  return {
    alumnos,
  }
}
