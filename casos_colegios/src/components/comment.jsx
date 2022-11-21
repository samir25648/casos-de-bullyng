import { Box, Flex, Text } from "@chakra-ui/react"

const Comment = ({ body, nombre }) => {

  return (
    <Box
      position='relative'
      w='500px'
    >
      <Box w='2px' h='100%' left='0' top='0' position='absolute' bgColor='blue'></Box>
      <Flex borderRadius="10"
        border='1px'
        borderColor='blackAlpha.300'
        p='2'
        mb={3}
        align='center'
        position='relative'
        justify='space-between'
      >
        <Box p='1'>
          <Text
            textAlign='left'
          >
            <strong>{nombre}: </strong>
            {body}
          </Text>
        </Box>
      </Flex>
    </Box >
  )
}

export default Comment