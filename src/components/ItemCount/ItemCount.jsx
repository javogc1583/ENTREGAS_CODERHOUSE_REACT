//import {useState, useEffect} from "react"
import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(!initial && 0)
    const { updateTotal } = useContext(CartContext)
    /*
    useEffect(() => {
        if (counter > 0) onAdd(stock - counter)
    }, [counter])
    */
    const handlerIncreaseCount = () => {
        if(stock > counter){
            setCounter(counter + 1)
            updateTotal(counter + 1)
        }
    }
    const handlerDecreaseCount = () => {
        if(counter>0) {
            setCounter(counter - 1)
            updateTotal(counter - 1)
        }
    }
    return (
        <>
        <Alert.Heading style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div>Disponibles: {stock - counter}</div>                  
        </Alert.Heading>
        <hr/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant="dark" style={{width: '30%', lineHeight:'1em'}} onClick={handlerDecreaseCount}><span>-</span></Button>  
            <Alert variant="secondary" style={{width: '30%', marginBottom: '0px', textAlign: 'center', fontSize: '1.2em'}}>
                {counter}
            </Alert>                        
            <Button variant="dark" style={{width: '30%'}} onClick={handlerIncreaseCount}><span>+</span></Button>          
        </div>
        <div>
            <br />
            <Button variant="dark" style={{width: '100%'}} onClick={()=>onAdd(counter)} disabled={!stock}><span>Agregar al carrito</span></Button>  
        </div>
        </>
    )
}