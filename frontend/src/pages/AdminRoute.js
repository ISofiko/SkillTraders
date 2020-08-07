import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Authentication check on the below lines.
  const adminaccess = window.localStorage.getItem("SkillTraders2020!Admin");
  const isAdmin = adminaccess === "true";

  // rerouting code below
  const useraccess = window.localStorage.getItem("SkillTraders2020!UserSession");
  let redirectpath = '/';
  if (useraccess !== null) {
    redirectpath = '/dashboard';
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: redirectpath, state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute