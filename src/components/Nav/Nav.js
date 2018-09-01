import React, { Component } from 'react';
import './Nav.css';
import { Redirect } from 'react-router-dom'

export default class Nav extends Component {

    handleClick = (val) => {
        if (val === 'home') {
            window.location.assign('/');
        } else if (val === 'about') {
            window.location.assign('/about');
        } else if (val === 'wheelies') {
            window.location.assign('/wheelies');
        }
    }

    render () {
        return (
            <div className="NavBody" >
                <div className="NavItems" >
                    <p onClick={() => this.handleClick('home')} >Home</p>
                    <p onClick={() => this.handleClick('wheelies')} >Wheelies</p>
                    <p onClick={() => this.handleClick('about')} >About us</p>
                </div>
            </div>
        )
    } 
}