import React, {useState} from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {

    const [cep, setCep ] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({cep, endereco, numero, cidade, estado});
    }}>
      <TextField
      value={cep}
      onChange={(event) => {
          setCep(event.target.value);
      }}
        id="cep"
        label="Cep"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
      value={endereco}
      onChange={(event) =>{
          setEndereco(event.target.value);
      }}
        id="endereço"
        label="Endereço"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
      value={numero}
      onChange={(event) => {
          setNumero(event.target.value);
      }}
        id="numero"
        label="Número"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
      value={cidade}
      onChange={(event) => {
          setCidade(event.target.value);
      }}
        id="cidade"
        label="Cidade"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
      value={estado}
      onChange={(event) => {
          setEstado(event.target.value);
      }}
        id="estado"
        label="Estado"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
