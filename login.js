import React from 'react';

// we are going to create a className for the component Banner, we extend a className with a method
// it's called inheritance (all properties and methods), next we render what we want to see from the 
// component

///////////////////////////////////
//SYNTAX
// React.createElement('elementName') {attributes example any classNamees or ids or href or other
// attributes}, 'innerHTML');  

// the inner html are the h1 and p elements

// the script below refers to the html below
{/*<div className="container">
<h1>Business</h1>
<p>Business slogan</p>
</div> */}

// if we don't use export it will only be visible in the banner.js file 
// in order to use this component we need to comment out in the index.js file



export default class Login extends React.Component {
  render(){
  return <div>
             <form>
         <div></div>
         <h3>Login</h3>
      <div className="form-group">
         <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div  class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div  className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
          </div>
}

}