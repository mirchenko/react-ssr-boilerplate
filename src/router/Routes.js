import React from 'react';
import { Route } from 'react-router-dom';
import Countries from "../components/Countries";
import Country from "../components/Country";


export default () => {
  return(
    <div>
      <Route exact path="/" component={Countries} />
      <Route path="/:name" component={Country} />
    </div>
  );
};