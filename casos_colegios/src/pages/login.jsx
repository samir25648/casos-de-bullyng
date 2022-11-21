import { Box, Button, Flex, FormControl, FormLabel, Input, Link, useToast } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { Link as ReachLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext.jsx"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLogged, user, state } = useAuth()
  const navegate = useNavigate()
  const toast = useToast()

  useEffect(() => {
    if (isLogged) {
      navegate("/")
    }

    if (state.error) {
      toast({
        title: 'Login user',
        description: "Error Creadenciales invalidas",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }

  }, [user, state])


  const handleSubmit = (e) => {
    e.preventDefault()

    login({ email, password })
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
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Passwod</FormLabel>
          <Input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button mt='5' type="submit"> enviar</Button>
        <Box w='77%' textAlign='right' color='blue'>
          <Link as={ReachLink} to="/register" position='absolute'>
            register
          </Link>
        </Box>
      </form>
    </Flex>
  )
}