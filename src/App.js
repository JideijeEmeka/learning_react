// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import Greet from './components/Greet';
// import Welcome from './components/welcome';
// import FunctionClick from './components/functionClick';
// import ClassClick from './components/classClick';
//import EventBind from './components/eventBind';
//import ParentComponent from './components/parentComponent';
//import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
// import Hello from './components/hello';
// import Message from './components/message';
// import Counter from './components/counter';

class App extends Component {
  render () {
    return (
      <div className="App">
        <NameList/>
        {/* <UserGreeting/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
        {/* <Counter/> */}
        {/* <Message></Message> */}
       {/* <Greet name = 'Bruce' heroName = 'Batman'>
         <p>This is children props</p>
       </Greet>
       <Greet name = 'Clark' heroName = 'Superman'>
         <button>Action</button>
       </Greet> */}
       {/* <Greet name = 'Diana' heroName = 'WonderWoman'/>
       <Welcome name = 'Bruce' heroName = 'Batman'/> */}
       {/* <Welcome name = 'Clark' heroName = 'Superman'/>
       <Welcome name = 'Diana' heroName = 'WonderWoman'/> */}
       {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
