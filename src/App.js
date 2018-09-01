import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>{ 'Header' }</div>
        <div style={styles.nav}>{ 'Nav Menu Here'}</div>
        <div style={styles.home}>{ 'Home Page' }</div>
        <div style={styles.footer}>{ 'Footer Here' }</div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '90vh', 
    display: 'grid',
    grid: "'header header header' 125px 'nav nav nav' 75px 'body body body' 1fr 'footer footer footer' 150px / 1fr 4fr 1fr",
  },
  body: {
    gridArea: 'body',
  },
  nav: {
    gridArea: 'nav',
  },
  footer: {
    gridArea: 'footer',
  },
  header: {
    gridArea: 'header',
  },
}

export default App;
