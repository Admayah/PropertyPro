import React from 'react'

const Pagination = ({postsPerPage, totalPosts}) => {
    const pageNumber = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
pageNumber.push(i)
    }

  return (
    <div>
        {pageNumber.map((num) => num)}
    </div>
  )
}

export default Pagination