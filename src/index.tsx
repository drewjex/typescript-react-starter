// Libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// tsconfig and webpack are setup so the "~" character is an absolute reference
// to the "src" directory of the project. This helps avoid paths like this
// "../../../App" and makes refactoring much easier.
import { App } from '~/App';

// Webpack loaders take care of compiling this and injecting it onto the page
// when this script is run.
import './styles.scss';

// Store a reference to the app container DOM node found in www/index.html
const appContainer = document.querySelector('#app-container');

// Tell ReactDOM to render the App component inside the DOM node we've selected.
ReactDOM.render(<App/>, appContainer);
