import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Account from './components/Account';

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
    url: 'https://api.spacetraders.io/my/account',
    headers: {
      'Authorization': token
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
  return (
    <div className="App" >
      <Account />
      <button onClick={checkStatus}>get status</button>

    </div>
  );
}

export default App;
