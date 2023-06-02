import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../service/firebase/firebaseConfig"
import { Timestamp, writeBatch } from "firebase/firestore"
import { collection, getDocs, query, where, addDoc } from "firebase/firestore"
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"
import { documentId } from "firebase/firestore"
import { Container } from "react-bootstrap"

export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, clearCart} = useContext(CartContext)


    const total = () =>
        cart.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.price,
            0
        )

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
   
            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'items')
            
            // creamos el query de busqueda en items de los mismos documentos que estan en el carrito para checar su stock
            const q = query(
                productsRef,
                where(documentId(), 'in', ids)
            )
            const productsAddedFromFirestore = await getDocs(q)
            // 
            const {docs} = productsAddedFromFirestore

            // verifica el stock actual antes de guardar la orden
            docs.forEach(
                doc=>{
                    const dataDoc = doc.data()
                    const stockDb = dataDoc.stock

                    const productAddedToCart = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = productAddedToCart?.quantity
                    
                    if(stockDb >= prodQuantity){
                        batch.update(doc.ref, {stock: stockDb-prodQuantity})
                    }else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                }
            )

            // si todos los productos alcanzan en stock
            if(outOfStock.length === 0){
                // termina de actualizar el stock de cada producto
                await batch.commit()
                // agrega un documento en la colección 'orders', si no existe se crea
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                // actualiza el ID de la orden
                setOrderId(orderAdded.id)
                clearCart()
            }else{
                alert('Hay productos que estan fuera de stock')
            }
            
        } catch(error){
            alert(error)
        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return <Container><h1 style={{textAlign:'center'}}>Se esta generando su orden...</h1></Container>
    }

    if(orderId){
        return <Container><h1 style={{textAlign:'center'}}>El id de su orden es: {orderId}</h1></Container>
    }

    return(
        <Container>
            <h1 style={{textAlign:'center'}}>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </Container>
    )
}