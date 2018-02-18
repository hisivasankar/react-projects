import React, { Component } from 'react';

import Layout from './components/Layout/Layout';

class App extends Component {
  state = {
    show: true
  }
  render() {
    return (
      <Layout />
    );
  }
}

export default App;
