import React from 'react'

const ItemPage = ({ posts }) => {
  return (
    <>
      {posts.map(item => (
        <div key={item.tasktitle}>
          <h1 style={{ color: 'black' }}>{item.description}</h1>
        </div>
      ))}
    </>
  )
}

export default ItemPage
