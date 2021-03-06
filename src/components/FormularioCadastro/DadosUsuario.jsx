import { TextField, Button } from "@material-ui/core";
import React, {useState}from "react";

function DadosUsuario({aoEnviar, validacoes}) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, SetErros] = useState({senha: {valido: true, texto:""}})

  function validarCampos(event){
    const {name, value } = event.target;
    const novoEstado = {...erros};
    novoEstado[name] = validacoes[name](value);
    SetErros(novoEstado);
  }

  function possoEnviar(){
    for(let campo in erros){
      if(!erros[campo].valido)
      {
        return false
      }
    }
    return true
  }
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()){
        aoEnviar({email, senha});
      }
    }}>
      <TextField
      value={email}
      onChange={(event) => {
        setEmail(event.target.value);
      }}
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
      value={senha}
      onChange={(event) => {
        setSenha(event.target.value);
      }}
      onBlur={(validarCampos)}
      error={!erros.senha.valido}
      helperText={erros.senha.texto}


        id="senha"
        label="senha"
        name="senha"
        type="password"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
