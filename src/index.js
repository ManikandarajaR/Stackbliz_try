import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Hello from './hello.js';

const PrintName = props => {
  return (
    <div onClick={props.onClick} className={props.className}>
      This is {props.name}{' '}
    </div>
  );
};

/* const App = () => {
  return <div>Hai Hello {printName('Manikandaraja')}</div>;
};
*/

const clicked = () => {
  alert('clicked');
};

const App = React.createElement(
  'div',
  { className: 'test' },
  'Hi',
  <PrintName name={'Manikandaraja'} className="test1" onClick={clicked} />
);

render(App, document.getElementById('root'));
