import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Account from './components/Account';
const token = 'e7310053-5be4-4293-b54c-24c0fa5b351b'

checkStatus();
function checkStatus() {
  var config = {
    method: 'get',
    url: 'https://api.spacetraders.io/game/status',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
function getAccount(token) {

  var config = {
    method: 'get',
    url: 'https://api.spacetraders.io/my/account?token=e7310053-5be4-4293-b54c-24c0fa5b351b',
    headers: {
      'Authorization': 'Bearer e7310053-5be4-4293-b54c-24c0fa5b351b'
    }

  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

function App() {
  const [text, setText] = useState('yo')

  function getAllShips() {
    var config = {
      method: 'get',
      url: 'https://api.spacetraders.io/systems/OE/ship-listings?token=e7310053-5be4-4293-b54c-24c0fa5b351b&class=',
      headers: {
        'Authorization': 'Bearer e7310053-5be4-4293-b54c-24c0fa5b351b'
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        setText(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className="App" >
      <Account />
      <button onClick={checkStatus}>get status</button>
      <button onClick={getAccount}>get account</button>
      <button onClick={getAllShips}>buy a ship</button>
      <p className='text' >{text}</p>
    </div>
  );
}

export default App;
