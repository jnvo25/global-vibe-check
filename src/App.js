import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './screens/NavBar.jsx'
import Landing from './screens/Landing.jsx';
import GlobePage from './screens/GlobePage.jsx';
import AboutUs from './screens/AboutUs.jsx';
import CovidGuidelines from './screens/CovidGuidelines.jsx';
import CovidStats from './screens/CovidStats.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/globe' component={GlobePage} />
          <Route path='/about' component={AboutUs} />
          <Route path='/guidelines' component={CovidGuidelines} />
          <Route path='/stats' component={CovidStats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
