import React from 'react';
import classes from './Pagination.module.css';

const Pagination = ({pagesArray, page, changePage}) => {
    return (
        <div className={classes.wrapper}>
        {pagesArray.map(p =>
          <span
            onClick={() => changePage(p)}
            className={page === p ? ({classes.item} : {classes.itemActive})}
            key={p}
          >
            {p}
          </span>
        )}
      </div>
    );
};

export default Pagination;