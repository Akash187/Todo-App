console.log('App Is Running!');
const appRoot = document.getElementById('app');

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ['WD', 'DS', 'AD']
    };
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) =>
      ({
        options: prevState.options.filter(option => option !== optionToRemove)
      })
    )
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) =>
      ({options: prevState.options.concat(option)})
    );
  }

  render() {
    const title = 'Todo App';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
};


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  )
};


const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
};


const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
      >Remove All
      </button>
      <p>Options component here</p>
      {props.options.map(option =>
        <Option
          handleDeleteOption={props.handleDeleteOption}
          key={option} option={option}/>
      )}
    </div>
  )
};


const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        onClick={() => {
          props.handleDeleteOption(props.option)
        }}>
        Remove
      </button>
    </div>
  )
};


class AddOption extends React.Component {

  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    console.log(error);
    if (!error) {
      e.target.elements.option.value = '';
    }
    this.setState(() => ({error}));
  }

  render() {
    return (
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
