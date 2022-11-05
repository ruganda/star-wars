import App from "../../App";
import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { peopleMocks } from "../mock";
import PeopleContextProvider from "../../contexts/peopleContext";

import PeopleTable from "../../components/peopleTable";
import PaginationComponent from "../../components/pagination";
import ProfileDetails from "../../components/profileDetails";
import SearchForm from "../../components/searchForm";

const {act} = TestRenderer;


describe("PeopleTable", () => {
  it("renders the table component without crashing", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <PeopleContextProvider>
          <PeopleTable data={[]} />
        </PeopleContextProvider>
      </MockedProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Pagination />", () => {
  it("renders <PaginationComponent/> without crashing>", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<PaginationComponent/>", () => {
  it("renders <PaginationComponent/> without crashing", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <PaginationComponent />
      </MockedProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe("<ProfileDetails/>", () => {
  it("renders <ProfileDetails /> without crashing", () => {
    const props = {
      match: {
        params: {
          name: "Luke Skywalker",
        },
      },
    };
    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <PeopleContextProvider>
          <ProfileDetails {...props}/>
        </PeopleContextProvider>
      </MockedProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<SearchForm/>", () => {
  it("renders <SearchForm/> without crashing", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should search by name in the  <SearchForm/>", () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );
    const event ={
      preventDefault: jest.fn(),
      target: {
        value: "Luke Skywalker",
      }
    }
    act(() => {
      component.root.findByType('input').props.onChange(event);
    });
    

    const input = component.root.findByType('input')
    expect(input.props.value).toEqual("Luke Skywalker");    
  });

  it("should submit a search in the  <SearchForm/>", () => {

    const component = TestRenderer.create(
      <MockedProvider mocks={peopleMocks} addTypename={false}>
        <PeopleContextProvider>
          <SearchForm />
        </PeopleContextProvider>
      </MockedProvider>

    );

    const event ={
      preventDefault: jest.fn()
    }
    act(() => {
      component.root.findByType('form').props.onSubmit(event);
    });
    
    const input = component.root.findByType('input')
    // the input is ""because we clear the input after submitting
    expect(input.props.value).toEqual("");    
  });
});
