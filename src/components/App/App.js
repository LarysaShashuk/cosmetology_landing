import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';

import { checkAuthInitiate } from '../../redux/actions/authActions';
import ScrollToTop from '../../services/ScrollToTop';
import HomeHage from '../Landing/HomePage/HomePage';
import ProcedurePage from '../Landing/ProcedurePage/ProcedurePage';
import ProceduresGalleryPage from '../Landing/ProceduresGalleryPage/ProceduresGalleryPage';
import WishPage from '../Landing/WishPage/WishPage';
import RegistrationPage from '../CRM/RegistrationPage/RegistrationPage';
import LoginPage from '../CRM/LoginPage/LoginPage';
import AdminPanel from '../CRM/AdminPanel/AdminPanel';
import CustomerCabinet from '../CRM/CustomerCabinet/CustomerCabinet';
import Spinner from '../Common/Spinner/Spinner';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import styles from './App.module.scss';
import CustomeMUITheme from './CustomeMUITheme';


function App() {
  let dispatch = useDispatch();

  const { loading, user, userData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthInitiate());
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={CustomeMUITheme}>
      <Router>
        <ScrollToTop>
          <div className={styles.App}>
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={HomeHage} />
                <Route
                  path="/procedures_gallery/:id"
                  component={ProceduresGalleryPage}
                />
                <Route path="/procedure/:id" component={ProcedurePage} />
                <Route path="/wish/:id" component={WishPage} />
                <Route path="/registration" component={RegistrationPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/admin" component={AdminPanel} />

                {/* <Route path="/admin">
                    {user && userData?.role === 'ADMIN' ? (
                      <AdminPanel />
                    ) : userData?.role !== 'ADMIN' ? (
                      <Redirect to="/login" />
                    ) : (
                      <Redirect to="/" />
                    )}
                  </Route> */}

                <Route exact path="/customer">
                  {user && userData?.role === 'USER' ? (
                    <CustomerCabinet />
                  ) : userData?.role !== 'USER' ? (
                    <Redirect to="/login" />
                  ) : (
                    <Redirect to="/" />
                  )}
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
