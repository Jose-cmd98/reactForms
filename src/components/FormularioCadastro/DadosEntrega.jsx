import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="Cep"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="endereço"
        label="Endereço"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="numero"
        label="Número"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <TextField
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
