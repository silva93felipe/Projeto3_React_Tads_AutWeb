
import {Link} from "react-router-dom"
import btnicon from "./../Assets/btn-icon.png"
import eajlogo from "./../Assets/eaj-logo-2.jpg"

function Navcomp() {
    const paginaPrinc = "/"
    const paginaProjPed = "/ProjPedagogico"
    const paginaNoticias = "/Noticias"
    const paginaRestaurants = "/Restaurants"
    
     
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://eaj.ufrn.br/" target="_blank">
                    <img id="eajLogo" className="rounded-3" src={eajlogo} height="70" alt="Devia aparecer algo aqui..." />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link text-light" to={paginaPrinc}>Pagina principal</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" to={paginaProjPed}>Projeto pedagógico</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" to={paginaNoticias}>Noticias</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" to={paginaRestaurants}>Restaurantes</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );    

   
}

export default Navcomp;