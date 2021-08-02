require('dotenv').config();
import typeDefs from "./src/schema/schema";
import resolvers from './src/resolvers/resolver';
import {ApolloServer} from 'apollo-server';
import PeopleAPI from "./src/datasource/people";



const server = new ApolloServer({ 
  typeDefs,
  dataSources: ()=>({ peopleAPI: new PeopleAPI }),
  resolvers
 });

// The `listen` method launches a web server.
if (process.env.NODE_ENV !== "test") {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}



