import React, {useState} from "react";
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';


function FormularioCadastro({aoEnviar, validarCPF}) {
  const  [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={proximo}/>,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>,
    <DadosEntrega aoEnviar={aoEnviar} />
  ]

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }


  // function formularioAtual(etapa){
  //   switch (etapa) {
  //     case 0:
  //       return <DadosUsuario aoEnviar={proximo}/>;
  //     case 1:
  //       return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>;
  //     case 2:
  //       return <DadosEntrega aoEnvair={aoEnviar}/>;
  //     default:
  //       return <h1>Erro ao Enviar Formulario!!</h1>
  //   }
  // }

    return (
      <>
      {formularios[etapaAtual]}
      </>
    );
}



export default FormularioCadastro;
