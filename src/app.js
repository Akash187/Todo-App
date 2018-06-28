console.log('App Is Running!');
const appRoot = document.getElementById('app');

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['WD', 'DS', 'AD']
    };
  }
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }
  render(){
    const title = 'Todo App';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
      </div>
    )
  }
}


class Options extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
  handleAddOptions(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
      e.target.elements.option.value = '';
    }
    else{
      console.log("Hello world!");
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option"/>
          <button>AddOption</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<TodoApp/>, appRoot);
