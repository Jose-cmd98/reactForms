import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function FormularioCadastro(props) {
  
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf ] = useState("");
    const [promocoes, setPromocoes ] = useState(false)
    const [ novidades, setNovidades] = useState(false);

  return (
    <form onSubmit={(event) =>{
        event.preventDefault();
        props.aoEnviar({nome, sobrenome, cpf, promocoes, novidades}); 
    }}>
      <TextField
      value={nome}
        onChange={(event) => {
          setNome(event.target.value);         
        }}

        id="nome"
        label="Nome"
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
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
      value={cpf}
        onChange={(event) =>{

          let cpfTemporario = event.target.value;

          if(cpfTemporario.length >=11){
            cpfTemporario = cpfTemporario.substr(0,11)
          }

          setCpf(cpfTemporario);

        }}
        id="cpf"
        label="CPF"
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
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
