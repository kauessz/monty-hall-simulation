import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/porta"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function jogo(){
  const router = useRouter()
  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValida = portas >= 3 && portas <= 100
    const temPresernteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdePortasValida && temPresernteValido)
    
  },[portas]) 

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))
  },[router?.query]) 

  function renderizarPortas(){
    return portas.map(porta => {
      return <Porta value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

    return (
        <div id={styles.jogo}>
            <div className={styles.porta}>
                {valido ? renderizarPortas() : 
                <h1>Valores Inválidos</h1>
                }
            </div>
            <div className={styles.botoes}>
                <Link href='/'>
                    <button>Reiniciar</button>
                </Link>
            </div>
        </div>
    )
}