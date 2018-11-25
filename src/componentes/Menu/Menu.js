import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'

// <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
// const props = { usuario: props.usuario, deslogaUsuario: props.deslogaUsuario }
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { aberto: false }
  }

  abreOuFechaMenu = () => {
    if (this.state.aberto) {
      this.setState({ aberto: false })
    } else {
      this.setState({ aberto: true })
    }
  }

  sair = () => {
    this.abreOuFechaMenu()
    this.props.deslogaUsuario()
  }
  
  render() {
    let classesDoBotao = 'navbar-menu__botao'
    let classesDasOpcoes = 'navbar-menu__opcoes'

    if (this.state.aberto) {
      classesDoBotao += ' navbar-menu__botao--aberto'
      classesDasOpcoes += ' navbar-menu__opcoes--aberto'
    }

    return (
      <nav className="navbar-menu">
        <button className={classesDoBotao} onClick={this.abreOuFechaMenu}>
          Menu
        </button>

        <ul className={classesDasOpcoes}>
        <li>
            <NavLink to="/" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/teste" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
              Teste
            </NavLink>
          </li>
            <li>
              <NavLink to="/sobre" activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/docs" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                Docs
              </NavLink>
            </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
