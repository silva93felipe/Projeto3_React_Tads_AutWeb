import nometads from "./../Assets/nometads.png"
function Footercomp() {

    return (
        // <footer className="mt-5 ms-1 border border-dark row">
        <footer className="bd-footer py-5 mt-5 bg-light">
            <nav >
                <ul className="row ">
                    <li className="col-8">
                        <img src={nometads} alt="image nome tads" className="col-2"></img>
                    </li>
                    <li className="col-4">
                        <p className="col">
                            Desenvolvido por Nikolaos / 
                            25 de janeiro  de 2022
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>  
    );
}

export default Footercomp;