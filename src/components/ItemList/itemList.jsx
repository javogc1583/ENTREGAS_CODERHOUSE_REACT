import { Item } from '../Item/Item';

/* Props es una palabra reservada para recibir argumentos como un objeto */
/* Si existe el json y aun esta cargando */
/* Para cada item del json se le aplica un componente ITEM */
export const ItemList = (props) => {  
    return (
        <>        
            {!props.list.length && "Loading..."}
            
            {props.list.map(item_index => 
                ( <Item key={item_index.id} item={item_index} /> )
            )}   
            
        </>
    )
}