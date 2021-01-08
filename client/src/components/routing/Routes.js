import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../../pages/Auth/Register';
import Login from '../../pages/Auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../../pages/Dashboard/DashBoard';
import Profiles from '../../pages/Profiles/Profiles';
import ProfileForm from '../profile-forms/ProfileForm';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        {/* <Route exact path="/profile/:id" component={Profile} /> */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
      </Switch>
    </section>
  );
};

export default Routes;