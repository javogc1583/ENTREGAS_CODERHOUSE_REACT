import { ItemCount } from "../ItemCount/ItemCount"
import Alert from 'react-bootstrap/Alert';

export const ItemDetail = ({product, onAdd}) => 
    {
    {/*console.log(product)*/}
    return(
        <div style={{width:'600px', margin:'0px auto'}}>
            <h1>
                {product.title}
            </h1>
            <img src={product.pictureUrl} alt={product.title} style={{width:'100%'}} />
            <Alert variant="info">
                <Alert.Heading style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>$ {product.price}</div>
                    <div>Disponibles: {product.stock}</div>
                </Alert.Heading>
                <hr />
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </Alert>            
        </div>
    )
    }
