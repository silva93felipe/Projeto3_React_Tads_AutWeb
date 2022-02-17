function ModalComponente(restaurant) {

    return (
        <>
            {/* tabindex="-1" na div modal*/}
            {console.log(restaurant)}
            <div className="modal" id={'modal-geral' + restaurant.id}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">{restaurant.name}</h3>
                        </div>
                        <div className="modal-body">
                            <p>{restaurant.description}</p>
                            <p>{restaurant.phone_number}</p>
                            <p>{restaurant.address}</p>

                            <ul>
                                <h4>Horários de atendimento</h4>
                                <li>
                                    <span>Segunda - Feira</span> {restaurant.hours.monday.opens_at} - {restaurant.hours.monday.closes_at}
                                </li>
                                <li>
                                    <span>Terça - Feira</span> {restaurant.hours.tuesday.opens_at} - {restaurant.hours.tuesday.closes_at}
                                </li>
                                <li>
                                    <span>Quarta - Feira</span> {restaurant.hours.wednesday.opens_at} - {restaurant.hours.wednesday.closes_at}
                                </li>
                                <li>
                                    <span>Quinta - Feira</span> {restaurant.hours.thursday.opens_at} - {restaurant.hours.thursday.closes_at}
                                </li>
                                <li>
                                    <span>Sexta - Feira</span> {restaurant.hours.friday.opens_at} - {restaurant.hours.friday.closes_at}
                                </li>
                                <li>
                                    <span>Sábado</span> {restaurant.hours.saturday.opens_at} - {restaurant.hours.saturday.closes_at}
                                </li>
                                <li>
                                    <span>Domingo</span> {restaurant.hours.sunday.opens_at} - {restaurant.hours.sunday.closes_at}
                                </li>

                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#modal-geral' + restaurant.id}>
                Mais detalhes
            </button>
        </>
    );
}

export default ModalComponente;