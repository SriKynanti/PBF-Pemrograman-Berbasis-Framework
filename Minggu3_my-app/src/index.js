import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Test from './Test';
import HelloComponent from './component/HelloComponent';
import Login from './Login';
//import Register from './Register';
import reportWebVitals from './reportWebVitals';

//const Hello = () =>{
//  return<p>hello</p>
//}

//function HelloComponent(){
//  return HelloComponent
//  ReactDOM.render(<HelloComponent/>, document.getElementById('root'));
//}

//const HelloComponent = () => {
//  return HelloComponent
//}
//class StateFullComponent extends React.Component{
//  render(){
//    return<p>StateFullComponent</p>
//  }
//}

//ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));
//ReactDOM.render(<Test />, document.getElementById('root'));
//ReactDOM.render(<HelloComponent />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('root'));
//ReactDOM.render(<Register />, document.getElementById('root'));

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

//ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
