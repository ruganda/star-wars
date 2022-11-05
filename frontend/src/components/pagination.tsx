import React, { useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { PeopleContext } from "../contexts/peopleContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  rootContainer: {
    margin: "30px 5px",
  },
});

const PaginationComponent = () => {
  const classes = useStyles();
  const { count, page, setPage, perPage } = useContext(PeopleContext);
  const pageCount = Math.ceil(count / perPage);

  const handlePageChange  = (event:React.ChangeEvent<unknown> , newPage:number ): void => {
    event.preventDefault();
    setPage(newPage);
  };

  return (
    <div className={classes.rootContainer}>
      <Pagination
        style={{
          width: "100VW",
          display: "flex",
          justifyContent: "center",
        }}
        count={pageCount}
        page={page}
        onChange={(event: React.ChangeEvent<unknown>, page: number) => handlePageChange(event, page)}
        variant="outlined"
      />
    </div>
  );
};

export default PaginationComponent;
