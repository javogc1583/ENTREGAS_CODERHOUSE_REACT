import { ItemCount } from "../ItemCount/ItemCount"
import Alert from 'react-bootstrap/Alert';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({product, onAdd}) => { 
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {       
        setQuantityAdded(quantity)

        const id = product.id
        const title = product.title
        const price = product.price
        const pictureUrl = product.pictureUrl
        const item = {
            id, title, price, pictureUrl
        }

        addItem(item, quantity)
    }
    return(
        <div style={{width:'600px', margin:'0px auto'}}>
            <h1>
                {product.title}
            </h1>
            <div style={{textAlign:'center'}}>
                <img src={product.pictureUrl} alt={product.title} style={{maxWidth:'80%'}} />
            </div>
            <Alert variant="info">
                <Alert.Heading style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>$ {product.price}</div>                    
                </Alert.Heading>
                <hr />     
                <h6>{product.description}</h6>  
                <hr />         
                {
                    quantityAdded > 0 ?
                    <Link to={'/cart'}> 
                        <Button variant="dark" style={{width: '100%'}}><span>Terminar Compra</span></Button>
                    </Link>                    
                    :
                    <ItemCount stock={product.stock} onAdd={handleOnAdd} />
                }
            </Alert>            
        </div>
    )
}
