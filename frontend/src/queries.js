import {
  gql
} from "@apollo/client";




const GET_PEOPLE_QUERY = gql`
  query GetPeople($page: Int $name: String) {
    people(page: $page name: $name) {
      next
      previous
      count
      results {
        name
        birth_year
        height
        mass
        gender
        homeworld
      }
    }
  }

`;

export default GET_PEOPLE_QUERY