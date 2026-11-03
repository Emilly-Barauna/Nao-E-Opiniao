import Styles from '../css/Footer.module.css'
import Logo from '../assets/logo-nao-e-opiniao.png'

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.conteudo}>
        <div className={Styles.apresentacao}>
          <img
            className={Styles.logo}
            src={Logo}
            alt="Não É Opinião"
          />

          <p>
            Informação confiável para reconhecer desigualdades, ampliar o
            diálogo e defender direitos.
          </p>
        </div>

        <div className={Styles.aviso}>
          <p>
            Este é um projeto educativo. Em situações de violência ou risco
            imediato, procure os canais oficiais de atendimento.
          </p>
        </div>
      </div>

      <div className={Styles.rodapeFinal}>
        <p>© 2026 Não É Opinião. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer