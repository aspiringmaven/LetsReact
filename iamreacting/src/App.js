import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header/>
          <Content/>
          <Footer/>
      </div>
    );
  }
}

class Header extends React.Component {
    render () {
        return (
            <h1>Learning React.....</h1>
        );
    }
}

class Content extends React.Component {
    render () {
        return (
            <p>Hello World, I am Reacting.....and this is just stateless components of react framework</p>
        );
    }
}

class Footer extends React.Component {
    render () {
        return (
            <h1>Powered by.... React JSX</h1>
        );
    }
}


export default App;
