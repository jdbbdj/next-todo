import React, { useEffect } from 'react'
import {
  FormControl,
  Input,
  FormLabel,
  Grid,
  GridItem,
  Button
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const SearchControl = styled(FormControl)`
  display: flex;
`

const SearchField = ({
  searchInput,
  setSearchInput,
  searchReports,
  setSearchReports,
  setPosts
}) => {
  useEffect(() => {
    if (searchReports && searchReports.length > 0) {
      let results = []
      if (searchInput !== '') {
        results = searchReports.filter(val => {
          if (val.tasktitle.toLowerCase().includes(searchInput.toLowerCase())) {
            return val
          }
        })
        setSearchReports(results)
      }
    }
  }, [searchInput])

  return (
    <form>
      <SearchControl>
        <Grid templateColumns={`repeat(6, 1fr)`}>
          <GridItem colSpan={4}>
            <Input
              type="text"
              name="username"
              id="searchReports"
              value={searchInput}
              onChange={event => {
                setSearchInput(event.target.value)
              }}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Button>Search</Button>
          </GridItem>
        </Grid>
      </SearchControl>
    </form>
  )
}

export default SearchField
