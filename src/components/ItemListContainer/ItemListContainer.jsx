import Container from 'react-bootstrap/Container';
//import products from "../../data/products.json"; // ya no se usa el json
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/itemList";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"

export const ItemListContainer = (props) => { 

    const [list, setList] = useState([]);
    const {id} = useParams()

    // utilizamos useEffect para tomar el valor de la lista que viene desde Firebase
    useEffect(()=>{        
        // DB viene de firebaseConfig
        const refCollection = id 
            ? query(collection(db, 'items'), where('category', '==', id))
            : collection(db, 'items')

        // creamos una promesa para recibir los datos
        getDocs(refCollection)
            .then(snapshot => {
                if(snapshot.size === 0){
                    console.log("NO HAY DOCUMENTOS EN LA COLLECTION")
                }else{
                    const productsFiletered = snapshot.docs.map(doc => {
                        const data_ = doc.data()
                        return {id:doc.id, ...data_}
                    })
                    setList(productsFiletered)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },[id])
    /*
    // Para trabajar con datos desde un JSON
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
    */
    return (
 
        <Container>
            <h1>{props.greeting}</h1>
            <ItemList list={list} />
        </Container>

    )
}