import Styles from '../css/Header.module.css'
import Logo from '../assets/logo-nao-e-opiniao.png'

function Header() {
  return (
    <header className={Styles.header}>
      <a className={Styles.logo} href="#inicio">
        <img
          className={Styles.logoImagem}
          src={Logo}
          alt="Não É Opinião"
        />
      </a>

      <nav className={Styles.menu} aria-label="Menu principal">
        <a href="#inicio">Início</a>
        <a href="#temas">Temas</a>
        <a href="#dados">Dados</a>
        <a href="#ajuda">Ajuda</a>
      </nav>

      <a className={Styles.material} href="#dados">
        Material educativo
      </a>
    </header>
  )
}

export default Header