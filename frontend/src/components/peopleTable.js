import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  rootContainer: {
    margin: "10px 5px",
  },
  muiTableRow: {
    height: "50px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
});



export default function PeopleTable({ data }) {
  const classes = useStyles();
  const history = useHistory();
  // use history to navigate to the the `/people${name}` route
  const viewDetailsPage =(name)=>{
    history.push(`/people/${name}`);
  }

  return (
    <TableContainer component={Paper} className={classes.rootContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Mass</TableCell>
            <TableCell>Homeworld</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((person, index) => (
            <TableRow className={classes.muiTableRow} key={person.name + index} onClick={()=>viewDetailsPage(person.name)}>
              {/* <Link to={`/people/${person.name}`}> */}
                <TableCell component="th" scope="row">
                  {person.name}
                </TableCell>
                <TableCell>{person.gender}</TableCell>
                <TableCell>{person.height}</TableCell>
                <TableCell>{person.mass}</TableCell>
                <TableCell>{person.homeworld}</TableCell>
              {/* </Link> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
