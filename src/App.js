
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Account from './components/Account';

const token = 'Bearer  '





function CheckStatus() {
  const [online, setOnline] = useState('')
  var config = {
    method: 'get',
    url: 'https://api.spacetraders.io/game/status',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
      setOnline(JSON.stringify(response.data.status))
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <h3>{online}</h3>
  )
}


function App() {

  const [text, setText] = useState('yo')
  const [ships, setShips] = useState('ships')

  function getAccount(token) {
    var config = {
      method: 'get',
      url: 'https://api.spacetraders.io/my/account?token=e7310053-5be4-4293-b54c-24c0fa5b351b',
      headers: {
        'Authorization': token
      }

    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data))
        setText(JSON.stringify(response.data.user));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  function GetAllShips() {

    var config = {
      method: 'get',
      url: 'https://api.spacetraders.io/systems/OE/ship-listings?token=e7310053-5be4-4293-b54c-24c0fa5b351b&class=',
      headers: {
        'Authorization': token
      }
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.shipListings))
        // setText(JSON.stringify(response.data.shipListings))
        // setShips(JSON.stringify(response.data.shipListings))


        //CURRENTLY BEING PASSED AS OBJECTS AND REACT DOESNT LIKE IT PLEASE FIX
        response.data.shipListings.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {
            setShips({ key }, { value })
          });
        });



        // response.data.forEach(obj => {
        //   Object.entries(obj).
        // });


      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // function shipSplit(props) {
  //   for (props of ships)
  //     return (
  //       `${ships}`
  //     )
  // }

  return (
    <div className="App" >
      <Account />
      <CheckStatus />
      {/* <button onClick={CheckStatus} onSubmit={((event) => event.preventDefault())}>get status</button> */}
      <button onClick={getAccount} onSubmit={((event) => event.preventDefault())}>get account</button>
      <button onClick={GetAllShips} onSubmit={((event) => event.preventDefault())}>buy a ship</button>

      <p className='text' >{text}{ships}</p>
    </div>
  );
}

export default App;
