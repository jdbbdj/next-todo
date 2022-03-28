import React, { useState, useEffect } from 'react'
import { dummyData } from '../../utils/data'
import SearchField from '../SearchField'
import ItemPage from './ItemPage'
import Pagination from './Pagination'

const TodoList = () => {
  const INITIAL_DATA = dummyData
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postperPage, setPostsPerPage] = useState(5)
  const [searchInput, setSearchInput] = useState('')
  const [searchReports, setSearchReports] = useState([])

  useEffect(() => {
    setPosts(INITIAL_DATA)
    setSearchReports(posts)
  }, [posts])

  const indexOfLastPost = currentPage * postperPage
  const indexOfFirstPost = indexOfLastPost - postperPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <SearchField
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchReports={searchReports}
        setSearchReports={setSearchReports}
        setPosts={setPosts}
      />
      <ItemPage posts={searchReports} />
      <Pagination
        postperPage={postperPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default TodoList
