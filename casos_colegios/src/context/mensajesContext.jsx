import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react"
import { deleteMensajeById, findAllMensajeByUserIdService, postMensajeService, putMensaje } from "../services/mensajeService";

const Context = createContext({})

export const MensajesContextProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState([]);
  const [keyword, setKeyword] = useState(1);

  useEffect(() => {
    if (!keyword) return setMensajes([])

    findAllMensajeByUserIdService(keyword)
      .then(data => {
        setMensajes(data.reverse())
      })
      .catch(err => console.log(err))
  }, [keyword, setMensajes])

  const addMensaje = ({ user_id, body }) => {
    postMensajeService({ user_id, body, estado: false })
      .then(data => {
        setMensajes([data, ...mensajes])
      })
      .catch(err => {
        console.log(err)
      })
  }

  const deleteMensaje = ({ id }) => {
    deleteMensajeById(id)
      .then(_ => {
        const temp = mensajes.filter(e => e.id != id)
        setMensajes(temp)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const checkMensaje = ({ id }) => {
    const temp = mensajes.find(e => e.id === id);

    putMensaje({
      id: temp.id,
      estado: !temp.estado,
      user_id: temp.usuario.id
    })
      .then(_ => {
        const tempMap = mensajes.map(e => {
          if (e.id === id) {
            e.estado = !e.estado
          }
          return e
        })
        setMensajes(tempMap)
      })
      .catch(err => console.log(err))
  }

  return (
    <Context.Provider value={{ mensajes, keyword, setKeyword, addMensaje, deleteMensaje, checkMensaje }}>
      {children}
    </Context.Provider>
  )
}

export const useMensajes = () => {
  const { mensajes, keyword, setKeyword, addMensaje, deleteMensaje, checkMensaje } = useContext(Context)

  return {
    mensajes, keyword, setKeyword, addMensaje, deleteMensaje, checkMensaje
  }
}