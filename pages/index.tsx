import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/porta";
import PortaModel from "../model/porta";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(7,6))

  function renderizarPortas(){
    return portas.map(porta => {
      return <Porta value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }
  
  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}
