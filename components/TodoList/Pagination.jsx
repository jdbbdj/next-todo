import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import styled from '@emotion/styled'

const CustomGridItem = styled(GridItem)`
  display: flex;
  cursor: pointer;
  &:hover {
    color: black;
    scale: 1.5;
  }
`

const Pagination = ({ postperPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postperPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <Grid
      templateColumns={`repeat(${pageNumbers}, 1fr)`}
      templateRows="repeat(1, 1fr)"
      gap={6}
      display="flex"
      style={{ justifyContent: 'flex-end' }}
    >
      {pageNumbers.map(number => (
        <CustomGridItem key={number} onClick={e => setCurrentPage(number)}>
          {number}
        </CustomGridItem>
      ))}
    </Grid>
  )
}

export default Pagination
