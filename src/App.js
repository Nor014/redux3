import React from 'react';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import NewsPage from './Components/NewsPage/NewsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'

import './App.css';
import './Components/HeaderMenu/HeaderMenu.css'
import './Components/AuthorizationForm/AuthorizationForm.css'
import './Components/Banner/Banner.css'
import './Components/Profile/Profile.css'
import './Components/NewsPage/NewsPage.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={LoadingPage} />
              <Route exact path='/news' component={NewsPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
