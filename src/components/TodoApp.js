import React from "react";
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class TodoApp extends React.Component {
  state = {
    options: [],
    modalDefault: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
      selectedOption: undefined
    }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) =>
      ({
        options: prevState.options.filter(option => option !== optionToRemove)
      })
    )
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() =>
      ({selectedOption: this.state.options[randomNum]})
    );
  };

  handleClearModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) =>
      ({options: prevState.options.concat(option)})
    );
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      if (json) {
        const options = JSON.parse(json);
        this.setState(() => ({options}));
      }
    } catch (e) {
      //Do Nothing
    }

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = 'Todo App';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal
            hasOptions={this.state.options.length > 0}
            handlePick={this.state.selectedOption} handleClearModal={this.handleClearModal}
          />
        </div>
      </div>
    )
  }
}
