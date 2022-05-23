import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import { gapi } from 'gapi-script';
import Logout from './components/Logout/Logout';

// const clientId = '1045690708969-nbqk0aja43udogblpmntcmqna2ufqd53.apps.googleusercontent.com';

function App() {

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   }

  //   gapi.load('client:auth2', start)
  // })

  return (
      <div className="App">
        <Header/>
        <Main/>
        {/* <Login />
        <Logout /> */}
      </div>
  );
}

export default App;
