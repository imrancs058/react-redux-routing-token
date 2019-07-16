import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import DefaultHeader from './DefaultHeader';
import DefaultAside from './DefaultAside';
import routes from '../../routes';
import {connect} from 'react-redux';

//const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));

//const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
    constructor(props)
    {
        super(props);
    }
  
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


  render() {
    return (
        <React.Fragment>

<DefaultHeader/>
            <DefaultAside/>
            <div className="page-wrapper">
                 <div className="container-fluid">
                     {/* main content*/}

                     <Suspense fallback={this.loading()}>
                         <Switch>
                             {routes.map((route, idx) => {
                                 return route.component ? (
                                     <Route
                                         key={idx}
                                         path={route.path}
                                         exact={route.exact}
                                         name={route.name}
                                         render={props => (
                                             <route.component {...props} />
                                         )} />
                                 ) : (null);
                             })}
                             <Redirect from="/" to="/dashboard" />
                         </Switch>
                     </Suspense>
                     {/* end main content*/}
                     </div>
                {/* footer */}
                {/* ============================================================== */}
                <DefaultFooter/>
                {/* ============================================================== */}
                {/* End footer */}
                {/* ============================================================== */}
            </div>


        </React.Fragment>

    )

  }
}



export default DefaultLayout;


