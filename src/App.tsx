import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import SearchBox from './components/SearchBox';
import MusicDeatils from './components/MusicDetails';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

function App(): JSX.Element {
  return (
    <Wrapper>
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <SearchBox />
          </Route>
          <Route path="/music" exact>
            <SearchBox />
          </Route>
          <Route path="/music/:title" exact>
            <MusicDeatils />
          </Route>
          <Route path="/movies" exact>
            <SearchBox />
          </Route>
          <Route path="/movie/:title" exact>
            <MusicDeatils />
          </Route>
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </Wrapper>
  );
}

export default App;
