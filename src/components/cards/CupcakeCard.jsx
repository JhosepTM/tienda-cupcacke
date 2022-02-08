const CupcakeCard = ({descripcion,sabor,imagen,color,precio}) => {
    return (
        <article className="s-radiu-1 s-shadow-bottom background s-shadow-card-micro white-color">
            <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                <img src={imagen} alt={color}></img>
            </div>
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="t5 s-mb-2 s-center">
                {descripcion}
                </h3>
                <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <span className="small s-mr-2">Precio: {precio} Bs.</span>
                    <span className="small">Sabor: {sabor}</span>
                </div>
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny s-mr-1" href="#">Reservar</a>
                    <a className="button--ghost-alert button--tiny" href="#">Vender</a>
                </div>
            </div>
        </article>
    )
}

export default CupcakeCard;