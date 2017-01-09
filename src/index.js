import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import $ from 'jquery'
import App from './components/App'
import Gameboard from './components/Gameboard'
// import session from './models/session'
import store from './store'

// React router
const router = (  
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Gameboard}/>
  	</Route>
  </Router>
);

ReactDOM.render(router, document.querySelector('#app'));

$(document).ajaxSend(function(e, xhr, jqAjax) {
	if (jqAjax.url.indexOf('jservice') === -1) {

		if (localStorage.authtoken) {
			xhr.setRequestHeader('Authorization', `Kinvey ${localStorage.authtoken}`)
		} 
		else {
			xhr.setRequestHeader('Authorization', `Basic ${store.settings.basicAuth}`)
		}
	}
});

// if (localStorage.session) {
// 	session.username = JSON.parse(sessionStorage.session).username;
// 	session.authtoken = JSON.parse(sessionStorage.session).authtoken;
// }