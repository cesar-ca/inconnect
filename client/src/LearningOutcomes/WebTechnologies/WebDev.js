import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Api from "../../Api";

import {useAuthContext} from '../../AuthContext';

function WebDev() {



    return (

        <main className="myContainer">
        <div className="row">
          <div className="col-md-6" id="rightRegister" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <h1>Web Development</h1>
            <Link className="btn btn-primary" to="/web_dev_quiz">
                Take Quiz
            </Link>

            <p className="text-center" ></p>
            {/* <img src={logo} className="logo" alt="FairPlay Logo"></img> */}
          </div>
          <div className="col-md-6" id="leftRegister">
          <h1 className="text-center">Fundamentals</h1>

            <p>Web development is the act of building and maintaining websites for the internet. Examples of
Websites that can be created include blogs, personal pages, commerce sites, or web sites,
social networks. The developers create, test and implement the site and maintain it up to date
troubleshoot additional issues and adding features.

<br></br> <br></br>

The web developer takes into account many security issues, such as
data entry, error checking, filtering and encryption. Malicious users
may try to exploit the websites and try to collect information such as
email addresses, passwords, and protected content such as credit card numbers.
 Stringent testing of web applications is recommended prior to public launch
to prevent these types of vulnerabilities from occurring.

<br></br>
<br></br>


Types of Web Development
<br></br>
<br></br>

<ul>
- Front-end web development: Front-end development is everything the user sees and 
interacts with. The focus lies on creating applications that are
visually pleasing and easy for users to navigate. The main technologies
that are used are: HTML, CSS, and JavaScript.


</ul>
<ul>
- Back-end development: Back-end development refers to the part of the application that the
user does not see. Back-end developers focus on the logic of the site, creating
servers and working with databases and APIs (Application Programming Interface).
</ul>

<ul>

- Full-stack development: full-stack development focuses on the front-end and the back-
end. They need to use the technologies of both types of web development.

</ul>


</p>
  
          </div>
        </div>
      </main> 
    )
}

export default WebDev;