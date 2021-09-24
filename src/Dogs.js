import React from "react";
import { Route } from "react-router-dom";
import Dog from "./Dog";


const Dogs = () => {
    return (
        <div>
        <Route path="/dogs/:breed" component={Dog} />
        </div>
      );
    
}
export default Dogs;