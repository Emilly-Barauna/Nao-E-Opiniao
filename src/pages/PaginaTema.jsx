import { useParams } from 'react-router-dom'
import Styles from '../css/PaginaTema.module.css'
import { temas } from '../data/temas'
import GifRacismo from '../assets/racismo-intro.gif'

function PaginaTema() {
  const { nomeTema } = useParams()
  const tema = temas[nomeTema]

  if (!tema) {
    return (
      <main className={Styles.pagina}>
        <section className={Styles.apresentacao}>
          <h1>Tema não encontrado</h1>
          <p>Volte para a página inicial e escolha um dos temas disponíveis.</p>
        </section>
      </main>
    )
  }

  return (
    <main className={Styles.pagina}>
      <section className={Styles.bannerTema}>
        <img
          src={GifRacismo}
          alt="Animação que representa o combate ao racismo"
        />
      </section>

      <section className={Styles.apresentacao}>
        <div className={Styles.textoApresentacao}>
          <h1>{tema.titulo}</h1>
          <p>{tema.resumo}</p>
        </div>
      </section>

     <section className={Styles.secao} id="manifestacoes">
  <h2>Como se manifesta?</h2>

  <p>{tema.explicacao}</p>

  {tema.manifestacoes?.length > 0 && (
    <div className={Styles.listaManifestacoes}>
      {tema.manifestacoes.map((manifestacao) => (
        <article
          className={Styles.cardManifestacao}
          key={manifestacao.titulo}
        >
          <h3>{manifestacao.titulo}</h3>
          <p>{manifestacao.texto}</p>
        </article>
      ))}
    </div>
  )}
</section>
<section className={Styles.secao}>
  <h2>Dados e impactos</h2>

  <div className={Styles.dadosCards}>
    <div className={Styles.areaGrafico}>
      <strong>{tema.dado?.numero || 'Em pesquisa'}</strong>

      <p>
        {tema.dado?.descricao || 'Dados e gráficos em pesquisa.'}
      </p>
    </div>

    {tema.impacto && (
      <div className={Styles.impacto}>
        {typeof tema.impacto === 'object' && (
          <strong>{tema.impacto.numero}</strong>
        )}

        <p>
          {typeof tema.impacto === 'object'
            ? tema.impacto.descricao
            : tema.impacto}
        </p>
      </div>
    )}
  </div>
</section>
      

      <section className={Styles.secao}>
        <h2>Se você passou por isso: o que fazer?</h2>

        {tema.orientacoes ? (
          <ul className={Styles.lista}>
            {tema.orientacoes.map((orientacao) => (
              <li key={orientacao}>{orientacao}</li>
            ))}
          </ul>
        ) : (
          <p>Orientações em pesquisa.</p>
        )}
      </section>

      <section className={Styles.secao}>
        <h2>Fontes consultadas</h2>

        {tema.fontes ? (
          <ul className={Styles.fontes}>
            {tema.fontes.map((fonte) => (
              <li key={fonte.link}>
                <a href={fonte.link} target="_blank" rel="noreferrer">
                  {fonte.nome}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <ul className={Styles.fontes}>
            <li>Fontes em pesquisa.</li>
          </ul>
        )}
      </section>
    </main>
  )
}

export default PaginaTema