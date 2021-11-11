import React from 'react';
import Button from '@material-ui/core/Button';
import TextField  from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';


function FormularioCadastro(){
    return(
        <form action="">
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>
            

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>



            <Switch name="Promoções" defaultChecked color="primary"/>

            <Switch name="Novidades" defaultChecked color="primary"/>
            
            <Button variant="contained" color="primary">
                Cadastrar
            </Button>
            </form>
    )
}

export default FormularioCadastro;