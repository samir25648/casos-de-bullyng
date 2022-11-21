import { color } from "@chakra-ui/react"
import { Flex, Text, Image, Link } from "@chakra-ui/react"
import { useMensajes } from "../context/mensajesContext"

const CardAlumno = ({ alumno }) => {
  const { setKeyword } = useMensajes()


  return (
    <Flex
      _hover={{
        borderColor: '#808080',
      }}
      p={4}
      transition='ease.1s'
      cursor='pointer'
      onClick={() => setKeyword(alumno.id)}
      boxShadow="lg" m="4"
      borderRadius="12"
      border='1px'
      borderColor='gray.200'
      width='250px'
      height='100px'
      align='center'
      gap='15'
    >
      <Image
        width={'80px'}
        borderRadius='12'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUizY06xoi-lDAKsIG3XKPir8ah9g7fDuKQ&usqp=CAU'
        alt={alumno.nombre}
      />
      <Text >{alumno.nombre} {alumno.apellido}<br /> {alumno.email}</Text>
    </Flex >
  )
}

export default CardAlumno