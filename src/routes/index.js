import React, { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import history from './history';
import TopContainer from '../components/TopContainer';
import { getAuthToken } from '../services/utils/storageService';
const HomePage = lazy(() => import('./HomePage'));
const LoginPage = lazy(() => import('./Login'));
const ForgotPassword = lazy(() => import('./ForgotPassword'));
const ResetPassword = lazy(() => import('./ResetPassword'));
const Dashboard = lazy(() => import('./Dashboard'));
const AppliedJobs = lazy(() => import('./AppliedJobs'));
const PostJob = lazy(() => import('./PostJob'));
const SignUp = lazy(() => import('./SignUp'));

function App() {
  const PrivateRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={(innerProps) =>
          window.localStorage.getItem('authToken') ? (
            <Component {...innerProps} />
          ) : (
            window.location.assign('/')
          )
        }
      />
    );
  };
  const PublicRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={(innerProps) =>
          window.localStorage.getItem('authToken') ? (
            window.location.assign('/dashboard')
          ) : (
            <Component {...innerProps} />
          )
        }
      />
    );
  };
  return (
    <div>
      <Router history={history}>
        <TopContainer />
        <Suspense fallback={<div></div>}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute exact path="/login" component={LoginPage} />
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PublicRoute
              exact
              path="/reset-password/:id?"
              component={ResetPassword}
            />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/applied-jobs" component={AppliedJobs} />
            <PrivateRoute exact path="/post-job" component={PostJob} />
            <PublicRoute exact path="/sign-up" component={SignUp} />
            <Route exact path="*" render={() => <div>No Page</div>} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
