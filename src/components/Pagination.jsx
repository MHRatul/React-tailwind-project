import React from 'react'

const Pagination = ({onPageChange, CurrentPage, blogs, pageSize}) => {
  const totalPages = Math.ceil(blog.length / pageSize);
  const renderPaginationLinks = () =>{
    return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) =>(
      <li className={pageNumber === CurrentPage ? "activerPagination" : ""} key={pageNumber}>
        <a href='#' onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
      </li>

    ))
  }
  return (
    
    <ul>
        <li>
          <button onClick={() => onPageChange(CurrentPage - 1)} disabled={CurrentPage ===1}>Previous</button>
        </li>
        <div>{renderPaginationLinks()}</div>
        <li>
          <button onClick={() => onPageChange(CurrentPage + 1)} disabled={CurrentPage === totalPages}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination