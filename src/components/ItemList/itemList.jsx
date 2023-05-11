import { Item } from '../Item/Item';

/* Props es una palabra reservada para recibir argumentos como un objeto */
export const ItemList = (props) => { 
    return (
        <>
        {/* Si existe el json y aun esta cargando */}
        {!props.list.length && "Loading..."}
            {/* Para cada item del json se le aplica un componente ITEM */}
          
            {props.list.map(item_index => (
                <>
                {/*console.log("ITEM ID:::: ", item_index.id)*/}
                <Item item={item_index} key={item_index.id}/>
                </>
            ))}   
            
        </>
    )
}