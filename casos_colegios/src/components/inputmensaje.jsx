import { AddIcon } from "@chakra-ui/icons"
import { Flex, FormControl, IconButton, Input, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useAuth } from "../context/authContext"

const InputMensaje = ({ sendInput }) => {
  const [body, setBody] = useState("")
  const { user } = useAuth()
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeof body === 'string' && body.length === 0) {
      return toast({
        title: 'Mensaje',
        description: "Error no puede enviar un mensaje sin contenido",
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }
    sendInput({ user_id: user.id, body })
    setBody("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        justify='center'
        align='center'
        gap='2'
      >
        <FormControl>
          <Input type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            w='100%' />
        </FormControl>
        <IconButton
          type="submit"
          aria-label='send mensaje'
          icon={<AddIcon />}
        />
      </Flex>
    </form>
  )
}

export default InputMensaje