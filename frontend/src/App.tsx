import './App.css';
import PeopleList from './people';
import PeopleContextProvider from './contexts/peopleContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,

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
  );
}

export default App;
