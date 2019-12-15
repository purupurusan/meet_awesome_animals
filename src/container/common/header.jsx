import React from 'react';

import Logo from '../images/logo';
//import TopImg from '../../static/top_img';

const Header = () => (
  <header>
    <Logo className = {'ourName'}></Logo>
    <div className = {'headerLine'}>
      <a className = {'hospital'}>hospital </a>
      <a className = {'salon'}>salon </a>
      <a className = {'cafe'}>cafe </a>
      <a className = {'activity'}>activity </a>
      <a className = {'sitter'}>sitter </a>
      <a className = {'login'} href = {'/login/login_top.html'}>login</a>
    </div>
    <style jsx>{`
      header{
        background-size: cover;
        background-color: white;
        color: black;
        padding: 0 10%;
        position: relative;
      }

      .header{
      }

      .headerLine {
        text-decoration: none;
        color: white;
        display: inline-block;
        position: absolute;
        top: 50%;
        -webkit-transform : translateY(-50%);
        transform : translateY(-50%);
        padding-left: 25%;
        width:70%;
      }

      a{
        padding-left: 5%;
        font-size: 120%;
        color: black;
      }
    `}</style>
    <style jsx global>{`
    body {
      padding: 0px;
      margin: 0px;
      width: 100%;
      list-style: none;
      font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue",
        "Helvetica", "Arial", sans-serif;    }
    `}</style>
  </header>
);

export default Header;