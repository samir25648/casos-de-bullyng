import { Box, Flex, HStack } from "@chakra-ui/react"
import CardAlumno from "../components/cardalumno"
import Mensaje from "../components/mensaje"
import { useMensajes } from "../context/mensajesContext"
import { useAlumnos } from "../hooks/useAlumnos"

const HomeProfesor = () => {
  const { alumnos } = useAlumnos()
  const { mensajes } = useMensajes()

  return (
    <Flex
      p={3}
      w="100%"
      margin='0'
      align='center'
      justify='center'
      gap='2'
    >
      <Flex
        direction='column'
        justify='center'
        align='center'
      >
        <HStack>
          {
            alumnos.map(alumno =>
              <CardAlumno key={alumno.id} alumno={alumno} />
            )
          }
        </HStack>
        <Box mt='10'>
          {
            mensajes.map(mensaje =>
              <Mensaje
                key={mensaje.id}
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

export default HomeProfesor