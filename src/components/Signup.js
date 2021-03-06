import React from 'react';
// import $ from 'jquery';
// import store from '../store';
import session from '../models/session';

const Signup = React.createClass({
  signupFunction: function(e){
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    session.signup(username, password);
    this.props.hideSignup();
  },
  render: function() {
    return (
      <div 
        className="modal-container signup-modal">
        <form 
          className="signup-form" 
          onSubmit={this.signupFunction}>
            <h3 
              className="h3-signup">Sign Up</h3>
            <input 
              ref="username" 
              type="text" 
              placeholder="username"/>
            <input 
              ref="password" 
              type="password" 
              placeholder="password"/>
            <input 
              id="signup-submit modalSubmitBtn" 
              type="submit" 
              value="enter" 
              onClick={this.signupFunction}/>
            <input 
              className="signup-cancel modalCancelBtn" 
              type="button" 
              value="cancel" 
              onClick={this.props.hideSignup}/>
        </form>
      </div>
    );
  },

});

export default Signup;
