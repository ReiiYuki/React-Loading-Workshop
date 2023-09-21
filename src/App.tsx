import { AlertDialog, AlertDialogCloseButton, AlertDialogHeader, Box, Button, Grid, GridItem, Modal, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner } from "@chakra-ui/react"
import createArrayWithSize from "./utils/createArrayWithSize"
import ImageWithSkeleton from "./ImageWithSkeleton"
import { usePerformPossibleErrorApi, usePerformSlowApi } from "./hooks"
import { useContext, useEffect } from "react"
import { ErrorContext } from "./error"

const ErrorNotifier = () => {
  const { error, setError } = useContext(ErrorContext)

  // useEffect(() => {
  //  openGenericDialog(error, blah)
  // }, [error])

  if (!error) {
    return null
  }
  
  return (
    <Modal isOpen onClose={() => setError(undefined)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something Went Wrong</ModalHeader>

          <ModalFooter>
            <Button variant='ghost' onClick={() => setError(undefined)}>Ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

const PerformSlowApiButton = () => {
  const [loading, performApi] = usePerformSlowApi()

  if (loading) {
    return <Spinner />
  }
  
  return <Button onClick={performApi}>Perform Slow</Button>
}

const PerformPossibleErrorApiButton = () => {
  const [loading, performApi] = usePerformPossibleErrorApi()

  if (loading) {
    return <Spinner />
  }
  return <Button onClick={performApi}>Perform With Error</Button>
}

function App() {
  return (
    <Box maxWidth="100%" m="auto">
      <PerformSlowApiButton />
      <PerformPossibleErrorApiButton />
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {createArrayWithSize(10).map(itemId => (
          // <di w='300px'>
            <ImageWithSkeleton key={itemId} src={`https://picsum.photos/id/${itemId}/1920`} />
          // </GridItem>
        ))}
        <p>SOme Text</p>
      </div>
      <ErrorNotifier />
    </Box>
  )
}

export default App
