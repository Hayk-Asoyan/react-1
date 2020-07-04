import React from 'react';
import './App.scss';
import App3 from "./folder/a3"
import App4 from "./folder/a4"
import App5 from "./folder/a5"



class App extends React.Component {
  render(){
      return <h1> <><App3 /><br/> <App4 /> <br/> <App5 /></></h1>;
    }

}

export default App;
