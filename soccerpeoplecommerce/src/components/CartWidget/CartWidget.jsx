import Badge from 'react-bootstrap/Badge';
import cart from './assets/3394009.png';

const styles={
    img:{
        height:30
    },
    span:{
        paddingLeft:5
    }
};
export const CartWidget = () => {
    return(
        <Badge bg="info">
            <img src={cart} alt="Imagen de un carrito de compra" style={styles.img}/>
            <span style={styles.span}>0</span>
        </Badge>
    )
}