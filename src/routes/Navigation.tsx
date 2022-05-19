import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import { FormBasicFormik } from '../forms/pages/FormBasicFormik';
import { FormFormikYup } from '../forms/pages/FormFormikYup';
import { RegisterPage } from '../forms/pages/RegisterPage';
import { FormikComponents } from '../forms/pages/FormikComponents';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home" activeClassName="nav-active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/basic-form" activeClassName="nav-active" exact>Basic Form</NavLink>
            </li>
            <li>
              <NavLink to="/basic-formik" activeClassName="nav-active" exact>Form Basic Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <h1>Home</h1>
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/basic-form">
            <RegisterPage />
          </Route>
          <Route path="/basic-formik">
            <FormBasicFormik />
          </Route>
          <Route path="/formik-yup">
            <FormFormikYup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}