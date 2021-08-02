import React, {createContext, useState} from 'react';
import {
  useQuery
} from "@apollo/client";
import GET_PEOPLE_QUERY from '../queries';



export const PeopleContext = createContext();

 
const PeopleContextProvider =(props)=>{

  const [page, setPage] = React.useState(1);
  const [name, setName] = React.useState('');
  const perPage = 10;
  console.log(name, '----name in context')

  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, { 
    variables: {page, name: name}
    });
  
  const defaultValue ={
    loading,
    error,
    people: data?.people?.results||[],
    page,
    count: data?.people?.count||0,
    name,
    setPage,
    setName,
    perPage
  }

    return (
    <PeopleContext.Provider value={defaultValue}>
      {props.children}
    </PeopleContext.Provider>
    );
}


export default PeopleContextProvider;