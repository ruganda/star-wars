import React, { useContext } from "react";
import SkeletonLoader from "./components/skeletonLoader";
import PeopleTable from "./components/peopleTable";
import SearchForm from "./components/searchForm";
import { PeopleContext } from "./contexts/peopleContext";
import PaginationComponent from "./components/pagination";

export default function PeopleList() {
  const { loading, error, people } = useContext(PeopleContext);
  if (error) return <span>Error : </span>;
  return (
    <>
      <SearchForm />
      {loading ? <SkeletonLoader /> : <PeopleTable data={people} />}
      {!loading && !!people.length && <PaginationComponent />}
    </>
  );
}
