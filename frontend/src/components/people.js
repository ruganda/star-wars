import React, {useContext} from 'react';
import SkeletonLoader from './skeletonLoader';

import GET_PEOPLE_QUERY from '../queries';

import PeopleTable from './peopleTable';
import SearchForm from './searchForm';
import { PeopleContext } from '../contexts/peopleContext';
import PaginationComponent from './pagination';


export default function PeopleList() {
  const { loading, error, people } = useContext(PeopleContext)
  console.log(error, '----->', people, loading)

  if (error) return <span>Error : </span>;
  

  return (
    <>
    <SearchForm />
    {loading? <SkeletonLoader/> : <PeopleTable data = {people}/>}
    {!loading && !!people.length && <PaginationComponent/>}
    </>
  );
}

