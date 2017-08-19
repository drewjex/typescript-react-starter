// Libraries
import * as React from 'react';

export const App = () =>
  <div>
    <h1>React Typescript Webpack Starter</h1>
    {
      MODE === 'production' ?
      <p>Production Mode</p> :
      <p>Development Mode</p>
    }
  </div>;
