// const myReactElement = React.createElement('h1',
//   {className: 'orange'},
//   'Hello From Pluralsight and React');

const Hello = () => {
  return React.createElement('h1',
    {className: 'orange'},
    'Hello From Pluralsight and React');
};

ReactDOM.render(
  React.createElement(Hello, {}, null),
  document.getElementById('app')
);