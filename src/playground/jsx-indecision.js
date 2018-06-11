console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'The worlds best decision-maker',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All Options</button>
            <ol>
                {app.options.map((value) => <li key={value}>{value}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();