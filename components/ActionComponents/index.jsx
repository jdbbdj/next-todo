import React from 'react'
import { EditIcon, ViewIcon, DeleteIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'

const ActionComponents = ({ item, toggleModal, modal }) => {
  const { generate, deleteReport, processing, modalData, edit, view } = modal

  const handleView = item => {
    toggleModal('view', true)
    toggleModal('modalData', item)
    console.log(modalData)
  }

  const handleDelete = item => {
    toggleModal('deleteReport', true)
    toggleModal('modalData', item)
    console.log(modalData)
  }
  return (
    <Grid templateColumns={`repeat(6, 1fr)`}>
      <GridItem w="200%" colSpan={2}>
        <EditIcon onClick={e => toggleModal('generate', true)} />
      </GridItem>
      <GridItem w="200%" onClick={e => handleView(item)} colSpan={2}>
        <ViewIcon />
      </GridItem>
      <GridItem w="200%" colSpan={2}>
        <DeleteIcon onClick={e => handleDelete(item)} />
      </GridItem>
    </Grid>
  )
}

export default ActionComponents
