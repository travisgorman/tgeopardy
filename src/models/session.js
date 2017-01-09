import Backbone from 'backbone';
// import $ from 'jquery';
// import router from '../index';
import store from '../store';
// import Header from '../components/Header';

const Session = Backbone.Model.extend({
	idAttribute: '_id',
	urlRoot: `https://baas.kinvey.com/user/${store.settings.appKey}/login`,
	defaults: {
		username: '',
		score: 0,
	},
	parse: function(response) {
		if (response){
			return {
				username: response.username,
				response: response._Id,
				authtoken: response._kmd.authtoken
			};
		}
	},
	login: function(username, password) {
		this.save({
			username: username,
			password: password
		},{
			success: (model, response) => {
				localStorage.authtoken = response._kmd.authtoken;
					this.unset('password');
					this.trigger('change');			
			},
			error: function(model, response) {
				  console.log( "ERROR! login failed" )
			}
		});	
	},
	signup: function(username, password) {
		this.save({
			username: username,
			password: password
		},{
			url: `https://baas.kinvey.com/user/${store.settings.appKey}`,
			success: function(model, response){
				model.unset('password');
				localStorage.authtoken = response._kmd.authtoken;
				this.trigger('change')
			},
			error: function(model, response) {
				console.log( "ERROR! signup failed");
			}
		})
	},
	logout: function() {
		localStorage.removeItem('authtoken');
		this.clear();
		this.trigger('change')
	}
});

let session = new Session();

export default session;