import GET_PEOPLE_QUERY from '../queries';

export const peopleMocks = [
  {
    request: {
      query: GET_PEOPLE_QUERY,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        people: { 
          next: 'https://swapi.dev/api/people/?page=2',
          previous: null,
          results: [
            {
              name: 'Luke Skywalker',
              height: '172',
              gender: 'male',
              mass: '77',
              birth_year: '19BBY',
              homeworld: 'https://swapi.dev/api/planets/1/',
            },
            {
              name: 'C-3PO',
              height: '172',
              gender: 'male',
              mass: '77',
              birth_year: '19BBY',
              homeworld: 'https://swapi.dev/api/planets/2/',
            }
          ]
        }
      },
    },
  },
];