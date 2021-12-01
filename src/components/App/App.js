import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from '../../services/ScrollToTop';
import HomeHage from '../Landing/HomePage/HomePage';
import ProcedurePage from '../Landing/ProcedurePage/ProcedurePage';
import ProceduresGalleryPage from '../Landing/ProceduresGalleryPage/ProceduresGalleryPage';
import WishPage from '../Landing/WishPage/WishPage';
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
