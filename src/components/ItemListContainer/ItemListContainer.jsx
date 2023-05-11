import Container from 'react-bootstrap/Container';
import products from "../../data/products.json";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/itemList";

export const ItemListContainer = (props) => { 

    const [list, setList] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const productList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
        productList
            .then(result => {
                if(id){
                    const productsFiletered = result.filter(item => item.category === id)
                    setList(productsFiletered)
                }else{
                    setList(result)
                }
                
            })
            .catch(error => console.log(error))
    }, [id])

    //console.log(props)  
    //console.log(products) 
    return (
 
        <Container>
            <h1>{props.greeting}</h1>
            <ItemList list={list} />
        </Container>

    )
}