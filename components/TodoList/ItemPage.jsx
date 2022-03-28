import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'
import ActionComponents from '../ActionComponents'

const ItemPage = ({ posts }) => {
  return (
    <>
      <Table variant="simple" height="350px" width="750px">
        <TableCaption>
          I highly encourage you to finish the task before the end date
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map(item => (
            <Tr key={item.tasktitle}>
              <Td>{item.tasktitle}</Td>
              <Td>{item.description}</Td>
              <Td>{item.startdate}</Td>
              <Td>{item.enddate}</Td>
              <Td>
                <ActionComponents />
              </Td>
              <td></td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  )
}

export default ItemPage
