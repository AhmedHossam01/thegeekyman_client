import React from "react"
import PaginationStyles from "../styles/modules/pagination.module.scss"
import { Link } from "gatsby"

const Pagination = ({ currentPage, previousPage, nextPage, isLastPage }) => {
  return (
    <div className={PaginationStyles.paginationStylesContainer}>
      {previousPage && (
        <div className={PaginationStyles.paginationStylesItem}>
          <Link
            className={PaginationStyles.paginationStylesLink}
            to={currentPage === 2 ? `/` : `/page/${previousPage}`}
          >
            &#8592; Previous
          </Link>
        </div>
      )}

      <div className="mx-2">{currentPage}</div>

      {!isLastPage && (
        <div className={PaginationStyles.paginationStylesItem}>
          <Link
            className={PaginationStyles.paginationStylesLink}
            to={`page/${nextPage}`}
          >
            Next &#8594;
          </Link>
        </div>
      )}
    </div>
  )
}

export default Pagination
