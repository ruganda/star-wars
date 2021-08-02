import logo from './logo.svg';
import './App.css';
import PeopleList from './components/people';
import PeopleContextProvider from './contexts/peopleContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfileDetails from './components/profileDetails';


function App() {
  return (

    <Router>
    <Switch>
      <PeopleContextProvider>
        <Route path="/people" exact component={PeopleList} />
        <Route path="/people/:name" exact={true} component={ProfileDetails} />
      </PeopleContextProvider>
    </Switch>
    </Router>


    // <div className="App">
    //   <PeopleContextProvider>
    //     <PeopleList/>
    //   </PeopleContextProvider>
    // </div>
  );
}

export default App;
