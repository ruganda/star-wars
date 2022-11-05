
import TestRenderer from 'react-test-renderer';
import { MockedProvider  } from '@apollo/client/testing';
import { peopleMocks } from './mock'
import PeopleContextProvider from '../contexts/peopleContext';

import PeopleTable from '../components/peopleTable';



describe('PeopleTable', () => {

it('renders the table component without crashing', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={peopleMocks} addTypename={false}>
      <PeopleContextProvider>
        <PeopleTable data={[]} />
      </PeopleContextProvider>
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();  
});



})