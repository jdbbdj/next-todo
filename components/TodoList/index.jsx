import React, { useState, useEffect } from 'react'
import { dummyData } from '../../utils/data'
import ItemPage from './ItemPage'
import Pagination from './Pagination'

const TodoList = () => {
  const INITIAL_DATA = dummyData
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postperPage, setPostsPerPage] = useState(5)

  useEffect(() => {
    setPosts(INITIAL_DATA)
  }, [posts])

  const indexOfLastPost = currentPage * postperPage
  const indexOfFirstPost = indexOfLastPost - postperPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <>
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
