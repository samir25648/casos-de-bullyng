const API_URL = "http://localhost:8080/api/v1/comment"

export function findAllComments(id) {
  return fetch(API_URL + `?mensajeid=${id}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }
      return resp.json()
    })
}

export function postComment(comment) {
  return fetch(API_URL + `/${comment.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      body: comment.body,
      user_id: comment.user_id
    })
  })
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }
      return resp.json()
    })
}