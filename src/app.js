console.log('App Is Running!');
const appRoot = document.getElementById('app');

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
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
  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
    }
    });
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
        <AddOption
          handleAddOption = {this.handleAddOption}
        />
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

  constructor(props){
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error : undefined
    }
  }
  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    console.log(error);
    if(!error){
      e.target.elements.option.value = '';
    }
    this.setState(() => {
      return {
        error
      }
    });
  }

  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option"/>
          <button>AddOption</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<TodoApp/>, appRoot);
