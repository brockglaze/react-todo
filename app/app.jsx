var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
$(document).foundation();

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
    /*
     example of how to add routes
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        example of how to add more routes
            <Route path="countdown" component = {Countdown} />
            <IndexRoute component={Timer} />
        </Route>
    </Router> */
    <p>Boilerplate 3 project</p>,
    document.getElementById('app')
);