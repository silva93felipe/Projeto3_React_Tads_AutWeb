import ModalComponente from './ModalComponente';

function RestauranteComponente(restaurant) {

    return (
        <>
            <section className="card">
                <img src={restaurant.logo} className="card-img-top" alt="logo" />
                <div className="card-body">
                    
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text">{restaurant.description}</p>
                    <p className="card-text">{restaurant.address}</p>
                    <p className="card-text">{restaurant.phone_number}</p>
                    <ModalComponente {... restaurant}/>
                </div>
            </section>
        </>
    )
}

export default RestauranteComponente;