import HerderComponent from "../Components/HerderComponent"
import capa from "./../Assets/capa.jpg"
import eajfotofrente from "./../Assets/eaj-foto-frente.jpg"
import eajpista from "./../Assets/eaj-pista.jpg"
import eajeucaliptos from "./../Assets/eucaliptos-1024x768.jpg"

import Footercomp from "./../Components/Footercomp"
const PaginaPrincipalTADS = () => {  
    return (
        <>
          <section className="container">
              <HerderComponent titulo="Apresentação" />
              <Text1/>
              <CarrocelImg/>
          </section>
          <Footercomp/>
        </>
    );
}
  const Text1 = ()=> {
    return (
      <article className="mb-5">
        <figure className="figure">
            <img className="figure-img " alt="Imagem tads" src={capa}/>
        </figure>

        <p className="mt-4"> 
          O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a 
          formação de profissionais capazes de compreender o processo de construção e reconstrução do 
          conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar 
          atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de 
          sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular 
          para a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a 
          melhoria da qualidade de vida das populações.
        </p>
        <p>  
          Os profissionais formados atuarão na área de análise e 
          desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas, engenharia 
          de software, gerência de projetos e administração de bancos de dados. 
        </p>
      </article>
    );
  }

  const CarrocelImg = ()=> {
    return (
      <section className="container">
        <header>
          <h2 className="my-3">Fotos do Campus</h2>
        </header>

        <article id="CarrDeIMG" className="carousel slide ms-5 mb-5 ps-5" data-bs-ride="carousel">
            <figure id="carouselImg" className="carousel-inner">
              <div className="carousel-item active m-3">
                <img src={eajfotofrente} alt="ops" className="w-75"/>
              </div>
              <div className="carousel-item">
                <img src={eajeucaliptos} alt="ops" className="w-75"/>
              </div>
              <div className="carousel-item">
                <img src={eajpista} alt="ops" className="w-75"/>
              </div>
            </figure>

            <footer>
              <button className="carousel-control-prev" type="button" data-bs-target="#CarrDeIMG" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-black"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#CarrDeIMG" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-black"></span>
                <span className="visually-hidden">Próxima</span>
              </button>
            </footer>
        </article>
      </section>
    );
  }
export default PaginaPrincipalTADS;