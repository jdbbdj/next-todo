import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react'
import ActionComponents from '../ActionComponents'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const ItemPage = ({ posts, toggleModal, modal }) => {
  return (
    <>
      <Table
        height="350px"
        width="750px"
        variant="striped"
        colorScheme="twitter"
      >
        <TableCaption>
          I highly encourage you to finish the task before the end date
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Task Name</Th>
            <Th>Description</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {posts.length !== 0 ? (
            posts?.map(item => (
              <Tr key={item.id}>
                <Td>{item.tasktitle}</Td>
                <Td>{item.description}</Td>
                <Td>{item.startdate}</Td>
                <Td>{item.enddate}</Td>
                <Td>
                  <ActionComponents
                    item={item}
                    toggleModal={toggleModal}
                    modal={modal}
                  />
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan={5}>
                <CircularProgress isIndeterminate color="green.300" />
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </>
  )
}

export default ItemPage
