import React from 'react'
import { EditIcon, ViewIcon, DeleteIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'

const ActionComponents = () => {
  return (
    <Grid templateColumns={`repeat(6, 1fr)`}>
      <GridItem w="200%" colSpan={2}>
        <EditIcon />
      </GridItem>
      <GridItem w="200%" colSpan={2}>
        <ViewIcon />
      </GridItem>
      <GridItem w="200%" colSpan={2}>
        <DeleteIcon />
      </GridItem>
    </Grid>
  )
}

export default ActionComponents
