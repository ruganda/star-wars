import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { PeopleContext } from '../contexts/peopleContext';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  rootContainer:{
    margin: '10px 5px'
  },
  muiTableRow:{
    height: '50px'
  }
});


function SkeletonLoader(props) {
  const classes = useStyles();
  const { perPage } = useContext(PeopleContext);
  const itemsArray = [...Array(perPage).keys()]

  console.log(itemsArray, '----');
  return (


  <TableContainer component={Paper} className={classes.rootContainer}>
  <Table className={classes.table} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell >Gender</TableCell>
        <TableCell >Height</TableCell>
        <TableCell >Mass</TableCell>
        <TableCell >Homeworld</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {itemsArray.map((__, index) => (
        <TableRow className={classes.muiTableRow} key={index}>
          <TableCell component="th" scope="row">
          <Skeleton/>
          </TableCell>
          <TableCell> <Skeleton/></TableCell>
          <TableCell ><Skeleton/></TableCell>
          <TableCell ><Skeleton/></TableCell>
          <TableCell ><Skeleton/></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  </TableContainer>
  );
}

export default SkeletonLoader

