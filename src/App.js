import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Login from './views/authentication/login';
import DefaultLayout from './container/DefaultLayout';
import DefaultHeader from './container/DefaultLayout/DefaultHeader';
import DefaultAside from './container/DefaultLayout/DefaultAside';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './container/protected HOC/PrivateRoute';
import {history} from './helper/History'
const loading = () => <div className="preloader"><div className="loader"><div className="loader__figure" /><p className="loader__label">Admin Pro</p></div></div>;


class App extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (


            <BrowserRouter >
                <React.Suspense fallback={loading()}>



                    <Switch>

                        <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />

                        <PrivateRoute  path="/" name="Home"  component={props => <DefaultLayout {...props}/>} />
                    </Switch>
                </React.Suspense>
            </BrowserRouter>


        );
    }
}



export default App;
