import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
//import BlogPost from './container/BlogPost/BlogPost';
import BlogPostMahasiswa from './container/BlogPost/BlogPostMahasiswa';

//ReactDOM.render(<BlogPost />, document.getElementById('content'));
ReactDOM.render(<BlogPostMahasiswa />, document.getElementById('content'));

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

//ReactDOM.render(<Hello />, document.getElementById('root'));

reportWebVitals();
