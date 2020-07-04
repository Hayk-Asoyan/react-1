import React from 'react';
import App1 from "./folder1/a1"
import App2 from "./folder1/a2"


class App3 extends React.Component {
    render(){
    return <span> <> <App1 /> <br/> <App2 /></><br/> 3</span>;
      }

}

export default App3