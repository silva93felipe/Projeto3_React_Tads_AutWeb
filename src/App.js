
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

import PaginaPrincipalTADS from "./Pages/PaginaPrincipalTADS";
import PaginaProjped from "./Pages/PaginaProjped";
import PaginaNoticias from "./Pages/PaginaNoticias";
import PaginaRestaurants from "./Pages/PaginaRestaurants";
import Navcomp from "./Components/Navcomp";

const  App = ()=> {
    return (
        <Router>
           <Navcomp/> 

            <Routes>
                {/* exact */}
                <Route path="/" element={<PaginaPrincipalTADS/>}/>           
                <Route path="/ProjPedagogico" element={<PaginaProjped/>}/>
                <Route path="/Noticias" element={<PaginaNoticias/>}/> 
                <Route path="/Restaurants" element={<PaginaRestaurants/>}/>     
            </Routes>                
                
        </Router>);
}

export default App;