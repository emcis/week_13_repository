import React from 'react';

// we are going to create a className for the component Banner, we extend a classNameName with a method
// it's called inheritance (all properties and methods), next we render what we want to see from the 
// component

///////////////////////////////////
//SYNTAX
// React.createElement('elementName') {attributes example any classNames or ids or href or other
// attributes}, 'innerHTML');  

// the inner html are the h1 and p elements

// the script below refers to the html below
{/*<div className="container">
<h1>Business</h1>
<p>Business slogan</p>
</div> */}

// if we don't use export it will only be visible in the banner.js file 
// in order to use this component we need to comment out in the index.js file


export default class Navigation extends React.Component {
    render(){
    return <div>
           <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Office Automation INC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controle="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      
         <div class="col-sm" class="collapse navbar-collapse" id="navbarNavDropdown">
           <uL class="navbar-nav">
             <li class="nav-item active">
                 <a class="nav-link" href="Index.html">Home</a>
             </li>
            <li className="nav-item active">
                <a className="nav-link" href="Index_Navbar_Contact.html">Contact</a>
            </li>
           <li  className="nav-item active">
                    <a className="nav-link" href="Index_Navbar_Request">Request-Info</a>
           </li>
           <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
             aria-expanded="false"> 
            Applications
            </a>
             
       <div  className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item"  href="#">Accounting</a>
                <a className="dropdown-item"  href="#">Human Resources</a>
                <a className="dropdown-item"  href="#">Database</a>  
            </div>  
          </li>
             </uL>
            </div>
           </nav> 
       </div>
}

}