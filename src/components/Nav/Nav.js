import React, { Component } from 'react';
import './Nav.css';
import { Redirect } from 'react-router-dom'

export default class Nav extends Component {

    handleClick = (val) => {
        if (val === 'home') {
            this.props.history.push('/');
        } else if (val === 'about') {
            this.props.history.push('/about');
        } else if (val === 'wheelies') {
            this.props.history.push('/wheelies');
        }
    }

    render () {
        return (
            <div className="NavBody" >
                <div className="NavItems" >
                    <p>Home</p>
                    <p onClick={() => this.handleClick('wheelies')} >Wheelies</p>
                    <p onClick={() => this.handleClick('about')} >About us</p>
                </div>
            </div>
        )
    } 
}