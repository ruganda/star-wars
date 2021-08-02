import { RESTDataSource } from 'apollo-datasource-rest'


class PeopleAPI extends RESTDataSource {
  constructor() {
    console.log('---- in the constructor')
    super();
    this.baseURL = 'https://swapi.dev/api/people/';
  }

  async fetchPeople(page=1, name=null){
    let query = `?page=${page}`
    console.log(page, name, '==page and==name')
    if(name){
      query = `?search=${name}`
    }
    console.log(query, '----query')
    const response = await this.get(query);
    console.log(response, '------response')
    return response
    
  }
}

export default PeopleAPI;
