import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";

window.apiFetchProps = {
  url: 'http://localhost:3000/'
}

fetch(window.apiFetchProps.url)
  .then(res => res.json())
  .then((result) => {
    ReactDOM.render(<App restaurants={result} />, document.getElementById('root'));
    registerServiceWorker();
  })

