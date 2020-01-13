import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="street navbar-brand">Street-Eat</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
                )
            }
        
}