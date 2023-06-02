import Badge from 'react-bootstrap/Badge';
import cartImage from './assets/3394009.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const styles={
    img:{
        height:30
    },
    span:{
        paddingLeft:5
    }
};
export const CartWidget = () => {
    const { cart } = useContext(CartContext)

	const totalQuantity = () =>
		cart.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity,
			0
		)

    return(
        <Link to='/cart' style={{display: totalQuantity()>0 ? 'block':'none'}}>
            <Badge bg="info">
                <img src={cartImage} alt="Imagen de un carrito de compra" style={styles.img}/>
                <span style={styles.span}>{totalQuantity()}</span>
            </Badge>
        </Link>
    )
}