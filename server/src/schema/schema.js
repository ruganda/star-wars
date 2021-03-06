
import  { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`

  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: String
    films:[String]
    species:[String]
    vehicles:[String]
    starships:[String]
    created: String
    edited: String
    url: String
  }

  type PaginatedPeople{
    count: Int
    next: String
    previous: String
    results: [Person]
  }
  
  type Query {
    people(page: Int name: String): PaginatedPeople
  }

`;

export default typeDefs;
