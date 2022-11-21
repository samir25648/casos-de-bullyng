import { ChakraProvider } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import VerifyRol from './components/VerifyRol'
import { MensajesContextProvider } from "./context/mensajesContext"
import { AuthContextProvider } from './context/authContext'
import { Login } from "./pages/login"
import NotFound from './pages/notfound'
import { Register } from './pages/register'
import Navbar from "./components/navbar"

function App() {

  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Navbar />
        <MensajesContextProvider>
          <Routes>
            <Route path="/" element={
              <RequireAuth>
                <VerifyRol />
              </RequireAuth>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </MensajesContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  )
}

export default App
