import { RESTDataSource } from 'apollo-datasource-rest'


class PeopleAPI extends RESTDataSource {
	public baseURL: string;
	public get: any;

  public constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/people/';
  }

  async fetchPeople(page=1, name=null):Promise<void>{
    let query: string = `?page=${page}`
    if(name){
      query = `?search=${name}`
    }
    const response  = await this.get(query);
    return response
    
  }
}

export default PeopleAPI;
