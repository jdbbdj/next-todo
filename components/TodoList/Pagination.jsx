import React from 'react'

const Pagination = ({ postperPage, totalPosts, setCurrentPage }) => {
  console.log(postperPage)
  console.log(totalPosts)
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postperPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      {pageNumbers.map(number => (
        <li key={number}>
          <h1 onClick={e => setCurrentPage(number)} style={{ color: 'red' }}>
            {number}
          </h1>
        </li>
      ))}
    </nav>
  )
}

export default Pagination
