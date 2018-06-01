import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';
import './Header.css';

class Header extends Component{
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=()=>{
        const element = document.getElementById("header");
        const viewW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (window.pageYOffset > 70 && viewW >=600) {
            element.classList.add("active");
        }
        else{
            element.classList.remove("active");            
        }
    }
    handleBurger = ()=>{
        const element = document.querySelector('.nav-header')
        element.style.width = "80vw";
    }
    handleHome = (e)=>{
        e.preventDefault()
        const element = document.querySelector('.nav-header')
        element.style.width = "0";
        const redirect = document.querySelector('#section-hero');
        smoothScroll(redirect);
    }
    handleDoit = (e)=>{
        e.preventDefault()
        const element = document.querySelector('.nav-header')
        element.style.width = "0";
        const redirect = document.querySelector('#section-activities');
        smoothScroll(redirect);
    }
    handleProd = (e)=>{
        e.preventDefault()
        const element = document.querySelector('.nav-header')
        element.style.width = "0";
        const redirect = document.querySelector('#section-trabalhos');
        smoothScroll(redirect);
    }
    handleTeam = (e)=>{
        e.preventDefault()
        const element = document.querySelector('.nav-header')
        element.style.width = "0";
        const redirect = document.querySelector('#section-team');
        smoothScroll(redirect);
    }
    render(){
        return (
            <header className="header-container">
                <div className="header-fixed" id="header">
                    <div className="logo-header-holder">
                        {/* <img src="" alt="logo"/> */}
                        <i className="fal fa-chess-king-alt"></i>
                        Overdata Lab
                    </div>
                    <div className="menu-btn-holder">
                        <button className="menu-btn" onClick={this.handleBurger}>
                            <i className="fal fa-bars"></i>
                        </button>
                    </div>
                    <nav className="nav-header">
                        <ul>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleHome}>Home</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleDoit}>O Que Fazemos</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleProd}>Produtos</a>
                            </li>
                            <li className="nav-header-item">
                                <a href="/" onClick={this.handleTeam}>Equipe</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;