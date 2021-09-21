import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from '../../services/ScrollToTop';
import HomeHage from '../HomePage/HomePage';
import ProcedurePage from '../ProcedurePage/ProcedurePage';
import ProceduresGalleryPage from '../ProceduresGalleryPage/ProceduresGalleryPage';
import WishPage from '../WishPage/WishPage';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className={styles.App}>
          <Switch>
            <Route path="/" exact component={HomeHage} />
            <Route
              path="/procedures_gallery/:id"
              component={ProceduresGalleryPage}
            />
            <Route path="/procedure/:id" component={ProcedurePage} />
            <Route path="/wish/:id" component={WishPage} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
