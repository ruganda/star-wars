import React, {createContext, ReactChild, ReactNode, useState} from 'react';
import {
  useQuery
} from "@apollo/client";
import GET_PEOPLE_QUERY from '../queries';
import { IContextValues } from '../interfaces'

interface  IContextProps{
  children: ReactChild| ReactNode,
}

export const PeopleContext = createContext({} as IContextValues);

 
const PeopleContextProvider =(props: IContextProps)=>{

  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const perPage = 10;


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