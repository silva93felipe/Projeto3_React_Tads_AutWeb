import Footercomp from "../Components/Footercomp";
import HerderComponent from "../Components/HerderComponent";

function PaginaNoticias() {
    
    return (
        <>
            <section className="container">
                <Content/>
            </section>
            <Footercomp />
        </>
    );
}

const Content = ()=> {
    return (
        <>
            <HerderComponent titulo="Noticias" />

            <article className="col-8 table">
                <table className="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <td>26/10/2021 09:04	Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2022.1</td>
                        </tr>
                        <tr>
                            <td>26/10/2021 09:02	Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2021.2</td>
                        </tr>
                        <tr>
                            <td>30/09/2021 07:53	Plano de curso das disciplinas de 2021.2</td>
                        </tr>
                        <tr>
                            <td>18/05/2021 14:02	Planos de curso das turmas de 2021.1</td>
                        </tr>
                        <tr>
                            <td>10/02/2021 10:11	Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.2</td>
                        </tr>
                    </tbody>
                </table>
            </article>
         </>
    );
}

export default PaginaNoticias;