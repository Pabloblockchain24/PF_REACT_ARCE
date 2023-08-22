import React from 'react'
import { useState } from 'react'
import { Button, Stack, Box } from '@chakra-ui/react'

const ItemCount = ( {stock, inicial, onAdd} ) => {
    const [cantidad, setCantidad] = useState(inicial)
    const handleAumentar = () => {
        if (cantidad < stock){
            setCantidad(cantidad+1)
        }
    }
    const handleDecrementar = () => {
        if (cantidad > 1){
            setCantidad(cantidad-1)
        }
    }
  return (
    <Stack direction="column" spacing={2} align="center" width="100%" marginBlock={5}>
        <Box display='flex' alignItems='center' justifyContent='center' width='100%'>
            <Stack spacing={3} direction='row' align='center'>
                <Button colorScheme='orange' size='md' onClick={handleDecrementar}> -  </Button>
                <h4 className='number'> {cantidad} </h4>
                <Button colorScheme='orange' size='md' onClick={handleAumentar}> +  </Button>
            </Stack>
        </Box>
        <Button colorScheme='red' onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</Button>
    </Stack>
  )
}
export default ItemCount;
 