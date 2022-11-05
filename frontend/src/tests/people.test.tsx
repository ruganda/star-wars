import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { peopleMocks } from "./mock";
import PeopleContextProvider from "../contexts/peopleContext";
import People from '../people'



describe("<People />", () => {
  it("renders the table component without crashing", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <PeopleContextProvider>
          <People />
        </PeopleContextProvider>
      </MockedProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});