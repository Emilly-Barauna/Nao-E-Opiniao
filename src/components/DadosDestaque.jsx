import Styles from '../css/DadosDestaque.module.css'

function DadosDestaque() {
  return (
    <section className={Styles.dados} id="dados">
      <div className={Styles.textoPrincipal}>
    

        <h2>
          Dados ajudam a enxergar o que muitas vezes é ignorado.
        </h2>
      </div>

      <div className={Styles.textoApoio}>
        <p>
          Reunimos pesquisas, indicadores e análises de fontes confiáveis para
          mostrar como essas violências se manifestam no Brasil.
        </p>

        <a href="#dados">Ver dados</a>
      </div>
    </section>
  )
}

export default DadosDestaque