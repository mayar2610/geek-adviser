import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import configureStore from './store/configureStore';
import SearchBox from './components/SearchBox';
import RecommendationDetails from './components/RecommendationDetails';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const store = configureStore();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Wrapper>
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <SearchBox />
            </Route>
            <Route path="/music" exact />
            <Route path="/movies" exact />
            <Route path="/recommendation/:title" exact>
              <RecommendationDetails />
            </Route>
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </Wrapper>
    </Provider>
  );
};

export default App;
