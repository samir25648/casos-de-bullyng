import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import { Box, ButtonGroup, Flex, IconButton, Stack, Tag, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import { useMensajes } from "../context/mensajesContext"
import { findAllComments, postComment } from "../services/commentService"
import Comment from "./comment"
import InputMensaje from "./inputmensaje"

const Mensaje = ({ id, body, estado, nombre }) => {
  const [state, setState] = useState(false)
  const [comments, setComments] = useState([])
  const { user } = useAuth()
  const { deleteMensaje, checkMensaje } = useMensajes()

  useEffect(() => {
    if (!id) return setState([])
    findAllComments(id)
      .then(data => {
        setComments(data.reverse())
      })
      .catch(err => {
        console.log(err)
      })

  }, [setState])

  const addComment = ({ body, user_id }) => {
    postComment({ id, body, user_id })
      .then(data => {
        setComments([{ id, body, usuario: user }, ...comments])
      })
      .catch(err => console.log(err))
  }

  return (
    <Box
      w='500px'
    >
      <Flex
        borderRadius="10"
        border='1px'
        borderColor='blackAlpha.300'
        p='2'
        mb={3}
        align='center'
        position='relative'
        justify='space-between'
      >
        <Box p='3'
          cursor='pointer'
          onClick={() => setState(!state)}
        >
          <Text
            textAlign='left'
          >
            <strong>{nombre}: </strong>
            {body}
          </Text>
        </Box>
        <Stack justify='center' align='center'>
          {
            user.rol == 'profesor' &&
            <ButtonGroup size='sm' isAttached >
              <IconButton
                onClick={() => deleteMensaje({ id })}
                colorScheme='red'
                icon={<DeleteIcon />} />
              <IconButton
                colorScheme='gray'
                onClick={() => checkMensaje({ id })}
                icon={<CheckIcon />} />
            </ButtonGroup>
          }
          <Tag
            right='6px'
            bottom='6px'
            colorScheme={!estado ? 'red' : 'teal'}
          >{!estado ? 'no-revisado' : 'revisado'} </Tag>
        </Stack>
      </Flex>
      {state &&
        <Box
          ml='10'
        >
          <InputMensaje
            sendInput={addComment}
          />
          <Box mt={3}>
            {
              comments.map((comment, index) =>
                <Comment
                  key={index}
                  body={comment.body}
                  nombre={comment.usuario.nombre}

                />
              )
            }
          </Box>
        </Box>
      }
    </Box>
  )
}

export default Mensaje