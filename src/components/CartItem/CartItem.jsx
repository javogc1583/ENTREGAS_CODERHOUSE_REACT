import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "react-bootstrap"

export const CartItem = (props) =>{
    // se usa Context para llamar a la función removeItem 
     const { removeItem } = useContext(CartContext)     
    // función que llamará el botón de Eliminar de cada producto en la lista
     const handleRemove = () =>{
        removeItem(props.id)
     }

    return(         
        <tr key={props.id}>
            <td>{props.title}</td>
            <td><img src={props.pictureUrl} alt={props.title} style={{height:'100px'}} /></td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
            <td><Button onClick={handleRemove}>
					Eliminar
				</Button>
            </td>
        </tr>
    )
}