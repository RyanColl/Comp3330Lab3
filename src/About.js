import React from "react";
import {Link} from 'react-router-dom'
function About() {
    return (
      <div>
        <h1>About</h1>
        <p>My name is John Doe.</p>
        <Link to='/'>Click to return to Home page</Link>
      </div>
    );
  }
  
  export default About;
  