import Footercomp from "./../Components/Footercomp";
import HerderComponent from './../Components/HerderComponent';

import capa from "./../Assets/capa.jpg"

function PaginaProjped() {
    return (
        <>
            <section className="container">
                <ArticleText/>
                <Ulelem/>
                <div className="bg-success">
                <span className="text-white">Projeto pedagógico do curso: </span>
                    <a className="text-white" href="https://sigaa.ufrn.br/sigaa/verProducao?idProducao=7876138&&key=80cc875a90b89f05a07f7732bd6d8c21">Documento
                    </a>
                </div>
            </section>
            <Footercomp/>
        </>
    );
}
const Ulelem = ()=> {
    return (
        <article>
            
            <span className="mt-5">
                Adicionalmente, as seguintes características são referência para a atuação deste 
                profissional (Portaria INEP n. 477, 6 junho 2017):
            </span>
            <ul>
                <li className="nav-item"> ser atento ao impacto das Tecnologias da Informação e Comunicação no atendimento 
                    e antecipação estratégica das necessidades da sociedade e das organizações;
                </li>

                <li className="nav-item">ser criativo, crítico e sistêmico na análise, compreensão e resolução de 
                    problemas da área de análise e desenvolvimento de sistemas computacionais;
                </li>

                <li>ser empreendedor na geração e identificação de oportunidades de negócios 
                    na área de análise e desenvolvimento de sistemas computacionais;
                </li>

                <li className="nav-item">ser ético e responsável perante as questões sociais, profissionais, 
                    ambientais, legais, políticas, humanísticas e tecnológicas; 
                </li>

                <li className="nav-item">ser comprometido com o desenvolvimento contínuo de conhecimentos, 
                    competências e habilidades, e com a evolução da tecnologia, da 
                    sociedade e do mundo do trabalho;
                </li>

                <li className="nav-item">ser colaborativo na atuação em equipes multidisciplinares.</li>
            </ul>
        </article>
    );
}

const ArticleText = ()=> {
    return (
        <article className="mb-5">
            <HerderComponent titulo="Perfil profissional" />

            <figure className="figure">
                <img className="figure-img" src={capa}/>
            </figure>
            <p className="mt-4"> 
                O profissional egresso do curso de Tecnologia em Análise e Desenvolvimento de 
                Sistemas adquire um elenco de competências e 28 habilidades.            
            </p>
            <p className="mt-2">  
                Segundo o Catálogo 
                Nacional de Cursos Superiores de Tecnologia este profissional analisa, projeta, 
                desenvolve, testa, implanta e mantém sistemas computacionais de informação.
                Avalia, seleciona, específica e utiliza metodologias, tecnologias e ferramentas 
                da Engenharia de Software, linguagens de programação e bancos de dados.
            </p>
            <p className="mt-2">
                Coordena 
                equipes de produção de softwares. Vistoria, realiza perícia, avalia, emite laudo 
                e parecer técnico em sua área de formação. Ele analisa, projeta, documenta, 
                especifica, testa, implanta e mantém sistemas computacionais de informação. 
            </p>
            <p className="mt-2 mb-5">
                Este profissional trabalha, também, com ferramentas computacionais, equipamentos 
                de informática e metodologia de projetos na produção de sistemas. Raciocínio 
                lógico, emprego de linguagens de programação e de metodologias de construção de 
                projetos, preocupação com a qualidade, usabilidade, robustez, integridade e 
                segurança de programas computacionais são fundamentais à atuação deste profissional.
            </p> <br/>
        </article>
    );
}

export default PaginaProjped;