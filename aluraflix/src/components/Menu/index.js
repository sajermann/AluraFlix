import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

export default function Menu(){
  return(
    <nav className="Menu">
      <Link to="/">
        <img class="Logo" src={logo} alt="AluraFlix"/>
      </Link>
      <Button as={Link} to="/cadastrar/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  )
}