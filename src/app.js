console.log('App Is Running!');
const appRoot = document.getElementById('app');

class TodoApp extends React.Component{
  render(){
    const title = 'Todo App';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['WD', 'DS', 'AD'];
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
      </div>
    )
  }
};

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
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
        {this.props.options.map(option =>
          <Option key={option} option={option}/>
        )}
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        <p>{this.props.option}</p>
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
