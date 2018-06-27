'use strict';

console.log('App Is Running!');
var appRoot = document.getElementById('app');

var app = {
  title: 'ToDo App',
  subtitle: 'This is a simple todo app',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTodoApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderTodoApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  console.log(app.options[randomNum]);
};

// JSX - JavaScript XML
var renderTodoApp = function renderTodoApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are the options' : 'No Options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What Should I do?'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: removeAll },
      'remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (x) {
        return React.createElement(
          'li',
          { key: x },
          x
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

//renderTodoApp();


// Counter App
var count = 0;
var increaseCount = function increaseCount() {
  count++;
  renderCounterApp();
};
var decreaseCount = function decreaseCount() {
  count > 0 ? count-- : count;
  renderCounterApp();
};
var resetCount = function resetCount() {
  count = 0;
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: increaseCount },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: decreaseCount },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCount },
      'Reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

//renderCounterApp();


// VisibilityToggle App
var buttonTitle = 'Show Detail';
var visibility = false;
var toggle = function toggle() {
  visibility = !visibility;
  renderVisibilityToggleApp();
};

var renderVisibilityToggleApp = function renderVisibilityToggleApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      visibility ? 'Hide Detail' : 'Show Detail'
    ),
    React.createElement(
      'p',
      null,
      visibility && 'Hey, There are some details you can see now.'
    )
  );
  ReactDOM.render(template, appRoot);
};

renderVisibilityToggleApp();
