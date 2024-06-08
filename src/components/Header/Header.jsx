import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" className="logo" />

            <nav>
            <Link to="/">Tela_Inicial</Link>
            <Link to="/create">Adicionar_celulares</Link>
            </nav>
        </header>
    )
}