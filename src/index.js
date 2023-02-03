import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CommentContextProvider from './context/CommentContextProvider';

ReactDOM.render(
  <CommentContextProvider>
    <App />
  </CommentContextProvider>,
  document.getElementById('root')
);