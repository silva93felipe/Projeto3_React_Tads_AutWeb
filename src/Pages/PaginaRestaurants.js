import { useEffect, useState } from "react";

import Footercomp from "../Components/Footercomp";
import RestauranteComponente from '../Components/RestauranteComponente';

import urlApi from '../Api/api';
import HerderComponent from "../Components/HerderComponent";

function PaginaRestaurants() {
    
    return (
        <>
            <section className="container">
                <Restaurat/>
            </section>
            <Footercomp/>
        </>
        );
}

const Restaurat = ()=> {
    const tamanho = 9;
    const tamanhoParam = `?size=${tamanho}`;

    const[restaurants, setRestaurants] = useState([]);

    const getRestaurats = async () => {
        const respostaApi = await fetch(`${urlApi}${tamanhoParam}`);
        const restaurants = await respostaApi.json();
        setRestaurants(restaurants);
    }

    useEffect(() => {
        getRestaurats();
    }, []);
    
    return (
        <>
            <HerderComponent titulo="Restaurantes" />        

            <section className="container">
                <article className="row">
                    {restaurants.map((restaurant) => {
                        return (
                            <div key={restaurant.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12">
                                <RestauranteComponente {... restaurant} />
                            </div>
                        );
                    })}
                </article>
            </section>
         </>
    );
}

export default PaginaRestaurants;