import Styles from '../css/HeroInicio.module.css'
import ImagemHero from '../assets/hero-inicio.png'

function HeroInicio() {
  return (
    <section className={Styles.hero}>
      <div className={Styles.conteudo}>
        <h1>
          Preconceito
          <br />
          não é opinião.
        </h1>

        <p className={Styles.descricao}>
          Racismo, misoginia, homofobia e transfobia não são pontos de
          vista. São violências que impactam vidas, limitam direitos e
          mantêm desigualdades.
        </p>

        <p className={Styles.textoApoio}>
          Aqui você encontra informação confiável, dados, histórias e
          caminhos para construir uma sociedade mais justa e em comum.
        </p>

        <a className={Styles.botao} href="#temas">
          Começar a entender
        </a>
      </div>

      <div className={Styles.imagem}>
        <img
          src={ImagemHero}
          alt="Quatro pessoas representam a diversidade brasileira"
        />
      </div>
    </section>
  )
}

export default HeroInicio