import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return <div>App</div>;
};

export default App;

const appDiv = document.getElementById('app');
render(<App />, appDiv);
