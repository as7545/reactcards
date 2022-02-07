import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from "./Cards";

ReactDOM.render(
  <>
  <h1 className='heading_style'>List of top 3 netflix Series</h1>
  <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTsEiLyLQ6TEOxlj1cXlNSgSe71N63kO-CA&usqp=CAUv"
  title="A Netflix Original Series" sname="DARK"
  link="https://www.netflix.com/in/title/80100172"/>
  <Card imgsrc="https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg"
  title="A Netflix Original Series" sname="Strangers thing"
  link="https://www.netflix.com/in/title/80057281"/>

   
  <Card imgsrc="https://mediaindia.eu/wp-content/uploads/2018/10/SacredGamesstills7.jpg"
  title="A Netflix Original Series" sname="Sacred Games"
  link="https://www.netflix.com/in/title/80115328"/>
  </>,


  document.getElementById('root')
  );

  // <React.StrictMode>,
  //   <App />
  // </React.StrictMode>,
 
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
