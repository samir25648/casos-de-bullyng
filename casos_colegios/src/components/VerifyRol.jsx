import HomeAlumno from "../pages/homeAlumno"
import HomeProfesor from "../pages/homeProfesor"
import { useAuth } from "../context/authContext"

const VerifyRol = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user.rol == 'alumno' ?
          <HomeAlumno />
          :
          <HomeProfesor />
      }
    </>
  )
}

export default VerifyRol; 
