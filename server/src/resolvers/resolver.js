

const resolvers = {
    Query: {
      //  underscore is an indicator that the arg is not being used
      people: (_,{ page, name },{dataSources})=> dataSources.peopleAPI.fetchPeople(page, name)
    
    }
};


export default resolvers;
