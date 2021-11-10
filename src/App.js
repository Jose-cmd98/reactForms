
// import { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@material-ui/core'
import { TextField } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
    <h1>Formulario de Cadastro</h1>
    <FormularioCadastro />

    </Container>
  );
}

export default App;
