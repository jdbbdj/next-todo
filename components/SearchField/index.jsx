import React, { useEffect } from 'react'
import {
  FormControl,
  Input,
  FormLabel,
  Grid,
  GridItem,
  Button
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

const SearchControl = styled(FormControl)`
  display: flex;
`

const SearchField = ({
  items,
  searchInput,
  setSearchReports,
  setSearchInput
}) => {
  useEffect(() => {
    if (items && items.length > 0) {
      const searchDebounce = setTimeout(() => {
        let results = []
        if (searchInput) {
          results = items.filter(item => {
            const searchField = item.tasktitle.toLowerCase()
            const searchString = searchInput.toLowerCase()
            return searchField.indexOf(searchString) > -1
          })
          setSearchReports(results)
        } else setSearchReports(items)
      }, 500)

      return () => clearTimeout(searchDebounce)
    }
  }, [searchInput])

  return (
    <form>
      <SearchControl>
        <Grid templateColumns={`repeat(6, 1fr)`}>
          <GridItem colSpan={1}>
            <FormLabel>Search</FormLabel>
          </GridItem>
          <GridItem colSpan={4}>
            <Input
              type="text"
              name="searchInput"
              id="searchInput"
              value={searchInput}
              onChange={event => {
                setSearchInput(event.target.value)
              }}
            />
          </GridItem>
          <GridItem>
            {searchInput && (
              <CloseIcon
                mt={2}
                onClick={event => setSearchInput('')}
                cursor="pointer"
              />
            )}
          </GridItem>
        </Grid>
      </SearchControl>
    </form>
  )
}

export default SearchField
