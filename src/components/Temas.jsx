import Styles from '../css/Temas.module.css'
import ImagemRacismo from '../assets/tema-racismo.png'
import ImagemMisoginia from '../assets/tema-misoginia.png'
import ImagemHomofobia from '../assets/tema-homofobia.png'
import ImagemTransfobia from '../assets/tema-transfobia.png'

function Temas() {
  return (
    <section className={Styles.temas} id="temas">
      <div className={Styles.cabecalho}>
        <h2>Informação para combater desigualdades</h2>
      </div>

      <div className={Styles.lista}>
        <article className={Styles.card}>
          <h3>Racismo</h3>
          <p>
            Entenda como o racismo se manifesta e quais são seus impactos na
            sociedade brasileira.
          </p>
          <a href="#racismo">Explorar</a>
          <img
            className={Styles.imagemTema}
            src={ImagemRacismo}
            alt="Homem negro em fundo amarelo"
          />
        </article>

        <article className={Styles.card}>
          <h3>Misoginia</h3>
          <p>
            Saiba como a misoginia se expressa e por que ela perpetua a
            desigualdade de gênero.
          </p>
          <a href="#misoginia">Explorar</a>
          <img
            className={Styles.imagemTema}
            src={ImagemMisoginia}
            alt="Mulher em fundo coral"
          />
        </article>

        <article className={Styles.card}>
          <h3>Homofobia</h3>
          <p>
            Conheça os desafios enfrentados por pessoas LGBTQIA+ e como
            combater a discriminação.
          </p>
          <a href="#homofobia">Explorar</a>
          <img
            className={Styles.imagemTema}
            src={ImagemHomofobia}
            alt="Pessoa em fundo azul-petróleo"
          />
        </article>

        <article className={Styles.card}>
          <h3>Transfobia</h3>
          <p>
            Entenda o que é a transfobia e como apoiar a dignidade e os
            direitos de pessoas trans e travestis.
          </p>
          <a href="#transfobia">Explorar</a>
          <img
            className={Styles.imagemTema}
            src={ImagemTransfobia}
            alt="Mulher trans em fundo amarelo"
          />
        </article>
      </div>
    </section>
  )
}

export default Temas