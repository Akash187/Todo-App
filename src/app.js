console.log('App Is Running!');
const appRoot = document.getElementById('app');

class TodoApp extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
      </div>
    )
  }
};

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>ToDo App</h1>
        <h3>Put your life in the hands of a computer</h3>
      </div>
    )
  }
}

class Action extends React.Component{
  render(){
    return(
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
        <p>Options component here</p>
        <Option/>
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        <p>Option component here</p>
      </div>
    )
  }
}

class AddOption extends React.Component{
  render(){
    return(
      <div>
        <button>AddOption</button>
      </div>
    )
  }
}


ReactDOM.render(<TodoApp/>, appRoot);
