import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
//import products from "../../data/products.json"; // Ya no se trabaja con JSON
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"


export const ItemDetailContainer  = ({onAdd}) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=>{        
        // DB viene de firebaseConfig // Se busca directo el documento con el id
        const refCollection = doc(db, 'items', id)

        // creamos una promesa para recibir los datos
        getDoc(refCollection)
            .then(snapshot => {
                if(snapshot.size === 0){
                    console.log("NO HAY DOCUMENTOS EN LA COLLECTION")
                }else{
                    const data_ = snapshot.data()
                    const productsFiletered = {id:snapshot.id, ...data_}
                    setProduct(productsFiletered)
                }
            })
            .catch(error => {
                console.log(error)
            })
    },[id])

    /*
    // Para trabajar con JSON
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = products.find(item => item.id === id)
                resolve(product)
            }, 2000)
        })
        getItem
            .then(result => {
                setProduct(result)
            })
            .catch(error => console.log(error))
    }, [id])
    */
    return(
        <Container>
            <ItemDetail product={product} onAdd={onAdd} />
        </Container>
    )
    
}