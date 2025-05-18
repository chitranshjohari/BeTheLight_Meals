const React = require('react');
const ReactDOM = require('react-dom/client');

const header = () => (
  <div className='header'>
    <img></img>
  </div>
)

const AppLayout = () => (
  <div className='app'>
    <header></header>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout></AppLayout>)