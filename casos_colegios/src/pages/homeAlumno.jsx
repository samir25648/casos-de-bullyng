import { Box, Flex, Text } from "@chakra-ui/react"
import InputMensaje from '../components/inputmensaje'
import Mensaje from "../components/mensaje"
import { useMensajes } from '../context/mensajesContext'

const HomeAlumno = () => {
  const { mensajes, addMensaje } = useMensajes()

  return (
    <Flex
      p={3}
      w="100%"
      margin='0'
      align='center'
      justify='center'

      mt='8'
    >
      <Flex
        direction='column'
        justify='center'
        align='center'
      >
        <Text mb='8'>Deja un mensaje y un profesor lo revisara a la brevedad</Text>
        <InputMensaje
          sendInput={addMensaje}
        />
        <Box mt='10' >
          {!mensajes
            ? <Text>No hay Mensaje</Text>
            :
            mensajes.map(mensaje =>
              <Mensaje key={mensaje.id}
                nombre={mensaje.usuario.nombre}
                {...mensaje}
              />
            )

          }
        </Box>
      </Flex>
    </Flex>
  )
}

export default HomeAlumno