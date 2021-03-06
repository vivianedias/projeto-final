import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Navbar from '../../componentes/Navbar/Navbar'
import Botao from '../../componentes/Botao/Botao'
import Footer from '../../componentes/Footer/Footer'
import Containers from '../../componentes/Containers/Containers'
import home from './home.png'
import camera from '../../componentes/Containers/icon-camera.png'
import sharing from '../../componentes/Containers/rede-distribuida.png'
import world from '../../componentes/Containers/icon-world.png'
import '../../index.css'
import './Home.css'
class Home extends Component {

    constructor(props){
      super(props)

      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.props.history.push("/teste");
    }

    render() {
        return (
            <main>
                <Navbar />
                <section className="container">
                    <div className="row align-items-center home-container__first-part">
                        <div className="col-md-6 first-part">
                            <h1 className="first-part__home_title">Você tem direito à privacidade</h1>

                            <div className="home-subtitle_button">
                                <p className="legenda">
                                    <AnchorLink className="link" href="#containers">Entenda por quê</AnchorLink>
                                </p>
                                    <Botao onClick={this.handleClick}>Descubra se você está segura(o)</Botao>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img className="img-styling" src={home} alt="Logo" />
                        </div>
                    </div>  

                    <h2 className="second-part__home_title" id="containers">Você está sendo vigiada </h2>
                    <div className="row justify-content-around card-deck  home-container__second-part">
                        <Containers  
                        className="col-12 
                        col-md-4" 
                        image={camera}
                        titulo="O que é privacidade para você?"
                        texto="Depois do fenômeno da internet e das redes sociais perdemos o senso do que é, de fato, privacidade.
                        Na era da ultravigilância com câmeras por toda cidade e mídias que incentivam o compartilhamento em
                        tempo real de nossas vidas, ninguém está verdadeiramente anônimo."
                        />
                        <Containers  
                        className="col-12 col-md-4" 
                        image={sharing} 
                        titulo="A internet é verdadeiramente democrática?"
                        texto="Todas as conexões que fazemos no nosso dia a dia pela internet são conexões pagas, para servidores em sua vasta
                        maioria, privados. Mas e se a internet não precisasse ser assim? As redes ditas distribuidas ou descentralizadas já
                        existem há algum tempo, no entanto, apenas alguns projetos tomam esse tipo de organização como sua. Essa é a internet
                        democrática que queremos, que temos? Imagine se todos fossemos responsáveis pela navegação da internet, ou pelo menos
                        uma parte dela - esse não é o espírito de fato democrático? Tecnologias como o Blockchain ou a rede TOR já funcionam
                        através dessas redes colaborativas. A transparência e a segurança em sistemas como esses são quase infalíveis, muito
                        mais seguras do que as redes que confiamos nossos dados mais sensíveis. A internet e as redes sociais precisam mudar,
                        todos já sabemos disso, e provavelmente as redes distribuidas são o caminho."
                        />
                        <Containers  
                        className="col-12 col-md-4" 
                        image={world} 
                        titulo="AVISO: Se é gratuito, você é o produto. "
                        texto="Elas são muitas e permeiam nossas vidas mesmo se escolhermos não fazer parte delas. Ao convivermos com
                        aqueles que fazem parte desse mundo, já participamos dele por associação. Mas qual o verdadeiro impacto das redes em nossas
                        vidas? Com seu mecanismo que se assemelha muito a uma câmera de condicionamento operante, ficamos viciados a esse sistema
                        de pequenas recompensas constantes: curtidas, compartilhamentos, comentários, tudo isso para que nosso cérebro reaja de
                        maneira positiva aos estimulos fornecidos pelos apps, nos mantendo presos à esse laço infinito. O modelo 'gratuito' 
                        de muitos produtos tecnológicos têm um custo, eles precisam nos manter online, conectados e sempre compartilhando mais e mais informações sensíveis
                        sobre nós mesmos nesse modelo de negócio pautado por propaganda"
                        />
                    </div>
            </section>
                <Footer />
            </main >
        )
    }
}

export default Home