import { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PeopleContext } from '../contexts/peopleContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchButton: {
    margin: '18.5px',
  },
});

const SearchForm =()=>{
  
  const classes = useStyles();

  const [searchText, setSearchText] = useState('');

  const { name, setName } = useContext(PeopleContext);

  const handleSearch = (event)=>{
    event.preventDefault();
    setSearchText(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(!name){
      setName(searchText)
    }else{
      setName('')
      setSearchText('');
    }
    
  }



  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
    <TextField id="outlined-search" label="Search name" type="search" variant="outlined" value={searchText} onChange={(e)=>handleSearch(e)} />
    <Button className={ classes.searchButton} variant="contained" type="submit">{name? 'Clear Search Results'  : 'Search' }</Button>
  </form>
  );
}


export default SearchForm;