import React from 'react';

function FormularioCadastro(){
    return(
        <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" />

            <label htmlFor="">Sobrenome</label>
            <input type="text" />

            <label htmlFor="">CPF</label>
            <input type="text" />

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />

            <label htmlFor="">Novidades</label>
            <input type="checkbox" />
            
            <button type="submit">Cadastrar</button>
            </form>
    )
}

export default FormularioCadastro;