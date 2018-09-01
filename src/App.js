import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>{ 'Header' }</div>
        <div style={styles.nav}><Nav /></div>
        <div style={styles.body}>{ 'Home Page' }</div>
        <div style={styles.footer}><Footer /></div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '90vh', 
    display: 'grid',
    grid: "'header header header' 125px 'nav nav nav' 75px '. body .' 1fr 'footer footer footer' 150px / 1fr 4fr 1fr",
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
