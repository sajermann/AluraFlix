import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

export default function CadastroCategoria(){
  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria
        </h1>

        <form>

          <label>
            Nome da Categoria: 
            <input type="text" value=""/>
          </label>

          <button>
            Cadastrar
          </button>
        </form>


        <Link to="/">
          Home
        </Link>
      </PageDefault>
    </>
  )
}