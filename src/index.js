import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <SimpleForm />,
    document.getElementById('root')
);
registerServiceWorker();
