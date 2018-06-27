console.log('App Is Running!');
const appRoot = document.getElementById('app');

let app = {
  title: 'ToDo App',
  subtitle: 'This is a simple todo app',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTodoApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderTodoApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  console.log(app.options[randomNum]);
};

// JSX - JavaScript XML
const renderTodoApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are the options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button disabled={app.options.length === 0} onClick={removeAll}>remove all</button>
      <ol>
        {app.options.map(x =>
          <li key={x}>{x}</li>
        )}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

//renderTodoApp();


// Counter App
let count = 0;
const increaseCount = () => {
  count++;
  renderCounterApp();
};
const decreaseCount = () => {
  count > 0 ? count-- : count;
  renderCounterApp();
};
const resetCount = () => {
  count = 0;
  renderCounterApp();
};


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

//renderCounterApp();







// VisibilityToggle App
let buttonTitle = 'Show Detail';
let visibility = false;
const toggle = () => {
  visibility = !visibility;
  renderVisibilityToggleApp();
};

const renderVisibilityToggleApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>{visibility ? 'Hide Detail': 'Show Detail'}</button>
      <p>{visibility && 'Hey, There are some details you can see now.'}</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderVisibilityToggleApp();