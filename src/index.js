import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBhDvmV0qYVxrlsPSxDMqO4tYA_21MjERE';

// Create a new component. This component should
// produce some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('.container'));
