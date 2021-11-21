import { TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario(){
    return(
        <form>
            <TextField id="email" label="email" type="email"/>
        </form>
    );
}

export default DadosUsuario;