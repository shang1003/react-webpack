

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { isString, isObject } from 'lodash';
const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        const key = route.key || i;
        if (route.redirect) {
          const { redirect } = route;

          if (isString(redirect)) return <Redirect key={key} to={redirect} />;

          if (isObject(redirect)) {
            return <Redirect key={key} {...redirect} />;
          }
        }
        return (
          <Route
            key={key}
            exact={route.exact}
            path={route.path}
            render={(props) => {
              if (route.render) {
                return route.render(props);
              }
              return (
                <route.component {...props} {...extraProps} routes={route.routes} />
              );
            }}
            strict={route.strict}
          />
        );
      })}
    </Switch>
  ) : null;

export default renderRoutes;
