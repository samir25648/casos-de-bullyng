import { Stack } from "@chakra-ui/react"
import { RadioGroup } from "@chakra-ui/react"
import { Box, Button, Flex, FormControl, FormLabel, HStack, Input, Radio } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerService } from "../services/usuariosService"

export const Register = () => {
  const [apellido, setApellido] = useState("")
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState()
  const [rol, setRol] = useState("alumno")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navegate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    registerService({
      apellido,
      nombre,
      edad,
      rol,
      email,
      password
    })
      .then(_ => {
        navegate("/login")
      })
      .catch(error => console.log(error))
  }

  return (
    <Flex
      w="100%"
      margin='0'
      align='center'
      justify='center'
      minH='80vh'
    >
      <form onSubmit={handleSubmit}>
        <Flex
          wrap='wrap'
          align='center'
          justify='center'
          gap='6'>
          <Box>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input type="text"
                onChange={(e) => setNombre(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Apellido</FormLabel>
              <Input type="text"
                onChange={(e) => setApellido(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Edad</FormLabel>
              <Input type="number"
                onChange={(e) => setEdad(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Passwod</FormLabel>
              <Input type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl >
              {/* <FormLabel>Rol</FormLabel> */}
              {/* <RadioGroup
                onChange={(e) => setRol(e.target.value)}
              >
                <HStack spacing='24px'>
                  <Radio value='profesor'>Profesor</Radio>
                  <Radio value='alumno'>Alumno</Radio>
                </HStack>
              </RadioGroup> */}
              {/* <Input type="text"
                onChange={(e) => setRol(e.target.value)}
              /> */}
            </FormControl>
          </Box>
          <Button mt='5' w='60%' type="submit">
            enviar
          </Button>
        </Flex>
      </form>
    </Flex >
  )
}