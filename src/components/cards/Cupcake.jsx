import PropTypes from "prop-types";
import { string } from "prop-types";

const Cupcake = ({descripcion,sabor,imagen,color,precio}) => {
    return (
        <div className="s-radiu-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={imagen} alt={sabor}></img>
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

Cupcake.propTypes = {
    precio: PropTypes.number,
    color: string,
    sabor: string.isRequired
}

Cupcake.defaultProps = {
    imagen: "https://www.namesnack.com/images/namesnack-cupcake-business-names-3993x6005-20210127.jpeg?crop=4:3,smart&width=1200&dpr=2",
    precio: 0
}

export default Cupcake;