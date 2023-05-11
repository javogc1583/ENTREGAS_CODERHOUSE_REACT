import {useState, useEffect} from "react"
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter > 0) onAdd(stock - counter)
    }, [counter])
    
    const handlerIncreaseCount = () => {
        if(stock > counter) setCounter(counter + 1)
    }
    const handlerDecreaseCount = () => {
        if(counter>0) setCounter(counter - 1)
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant="dark" style={{width: '30%'}} onClick={handlerDecreaseCount}><span>-</span></Button>  
            <Alert variant="secondary" style={{width: '30%', marginBottom: '0px', textAlign: 'center', fontSize: '2em'}}>
                {counter}
            </Alert>                        
            <Button variant="dark" style={{width: '30%'}} onClick={handlerIncreaseCount}><span>+</span></Button>          
        </div>
    )
}