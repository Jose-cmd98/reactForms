import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';


function DadosPessoais({aoEnviar, validacoes}) {
  
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf ] = useState("");
    const [promocoes, setPromocoes ] = useState(false);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido: true, texto:""}, nome:{valido:true, texto:""}});

    function validarCampos(event){
      const {name, value} = event.target;
      const novoEstado = {...erros}
      novoEstado[name] = validacoes[name](value);
      setErros(novoEstado)
    }

    function possoEnviar(){
      for(let campo in erros){ //para campos em erros
        if(!erros[campo].valido){ //se for diferente de valido
          return false //n liberar
        }
      }
      return true // se cair fora do loop, passa p/proximo
    }

  return (
    <form onSubmit={(event) =>{
        event.preventDefault();
        if(possoEnviar()){
           aoEnviar({nome, sobrenome, cpf, promocoes, novidades}); 
        }
    }}>
      <TextField
      value={nome}
        onChange={(event) => {
          setNome(event.target.value);         
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}

        id="nome"
        label="Nome"
        name="nome"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
      value={sobrenome}
        onChange={(event) =>{
          setSobrenome(event.target.value);   
        }}
        id="sobrenome"
        label="Sobrenome"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
      value={cpf}
        onChange={(event) =>{
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        

        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}

        id="cpf"
        label="CPF"
        type="number"
        name="cpf"
        required
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
      checked={promocoes}
        label="Promoções"
        control={<Switch onChange={(event) =>{
          setPromocoes(event.target.checked)
        }} 


        name="promocoes" color="primary" />}
      />

      <FormControlLabel
        checked={novidades}
        label="Novidades"
        control={<Switch
          
          onChange={(event) =>{
            setNovidades(event.target.checked);
          }}
          
          name="novidades"  color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;