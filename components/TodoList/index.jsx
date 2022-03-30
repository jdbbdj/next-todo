import React, { useState, useEffect } from 'react'
import { dummyData } from '../../utils/data'
import SearchField from '../SearchField'
import ItemPage from './ItemPage'
import Pagination from './Pagination'
import { Button } from '@chakra-ui/react'
import { fetchTasks } from '../../redux/actions/taskAction'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {
  const INITIAL_DATA = dummyData
  const logs = useSelector(state => state.taskReducer.tasks)
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postperPage, setPostsPerPage] = useState(5)
  const [searchInput, setSearchInput] = useState('')
  const [searchReports, setSearchReports] = useState([])
  const [selectedReports, setSelectedReports] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  useEffect(() => {
    setPosts(logs)
    setSearchReports(logs)
    setSelectedReports(logs)
  }, [logs])

  const indexOfLastPost = currentPage * postperPage
  const indexOfFirstPost = indexOfLastPost - postperPage
  const currentPosts = searchInput
    ? searchReports.slice(indexOfFirstPost, indexOfLastPost)
    : selectedReports.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
      <SearchField
        items={selectedReports}
        searchInput={searchInput}
        setSearchReports={setSearchReports}
        setSearchInput={setSearchInput}
      />
      <ItemPage posts={currentPosts} />
      <Pagination
        postperPage={postperPage}
        totalPosts={posts.length}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default TodoList
