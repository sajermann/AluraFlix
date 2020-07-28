import React from 'react';
import logo from '../../assets/logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

export default function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img class="Logo" src={logo} alt="AluraFlix"/>
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  )
}