import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import Login from './Components/Login';
import Budget from './Components/Budget';

ReactDOM.render(

        <BrowserRouter >
            <Switch>
                <Route path="/" component={App} exact={true}> </Route>
                <Route path="/login" component={Login} > </Route>
                <Route path="/budget" component={Budget} > </Route>
            </Switch>
        </BrowserRouter>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
