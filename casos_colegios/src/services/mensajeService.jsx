
const API_URL = "http://localhost:8080/api/v1/mensaje"

export function postMensajeService(mensaje) {

  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mensaje)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
}

export function findAllMensajeByUserIdService(userid) {
  return fetch(API_URL + `/${userid}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
}

export function findAllMensajes() {
  return fetch(API_URL)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
}

export function deleteMensajeById(id) {
  return fetch(API_URL + `/${id}/`, {
    method: "DELETE"
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
    })
}

export function putMensaje(mensaje) {
  console.log(mensaje)
  return fetch(API_URL + `/${mensaje.id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mensaje)
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
    })
}