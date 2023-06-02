//import { useEffect } from "react"
import {getFirestore} from "firebase/firestore"
//import {getFirestore, collection, getDocs} from "firebase/firestore"
//import {getFirestore, collection, addDoc} from "firebase/firestore"
//import {getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore"
//import {getFirestore, getDoc, doc} from "firebase/firestore"




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: "AIzaSyBF0MlBZGj9hK-IpamK48J9v56AFAf3EYc"
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "soccerpeoplecommerce.firebaseapp.com",
  projectId: "soccerpeoplecommerce",
  storageBucket: "soccerpeoplecommerce.appspot.com",
  messagingSenderId: "111887762655",
  appId: "1:111887762655:web:05f39aae5925075a06956a",
  measurementId: "G-LZ5871J5HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// inicializamos sin asignar a una variable
//initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app)


// creamos un useEffect para recibir los datos de la BD desde Firebase y obtener un DOCUMENTO
  /*useEffect(()=>{
    const db = getFirestore()
    const refDoc = doc(db, "items", "l19fdH6TJ71RHfyfUbub")
    // creamos una promesa para recibir los datos
    getDoc(refDoc).then(snapshot => {
      console.log({id:snapshot.id, data: snapshot.data()})
    })
  },[])*/

  // creamos un useEffect para recibir los datos de la BD desde Firebase y obtener una COLLECTION
  /*useEffect(()=>{
    const db = getFirestore()
    const refCollection = collection(db, "items")
    // creamos una promesa para recibir los datos
    getDocs(refCollection).then(snapshot => {
      if(snapshot.size === 0){
        console.log("NO HAY DOCUMENTOS EN LA COLLECTION")
      }else{
        console.log(snapshot.docs.map(doc => {
          return {id:doc.id, data: doc.data()}
        }))
      }
    })
  },[])*/

// creamos un useEffect para recibir los datos de la BD desde Firebase y obtener una QUERY de la COLLECTION
/*useEffect(()=>{
  const db = getFirestore()
  //const refCollection = collection(db, "items")
  const q = query(
    collection(db, "items"),
    where("price", ">", 2000),
    limit(10)
  )
  // creamos una promesa para recibir los datos
  getDocs(q).then(snapshot => {
    if(snapshot.size === 0){
      console.log("NO HAY DOCUMENTOS EN LA COLLECTION")
    }else{
      console.log(snapshot.docs.map(doc => {
        return {id:doc.id, data: doc.data()}
      }))
    }
  })
},[])
*/

  // ENVIAR DATOS A LA BD de FIREBASE
  //const senOrder = () => {
    /*const item_ = {
      title:"Short adidas Real Madrid Visita 22/23", 
      price:1200, 
      category:"Ropa",
      stock:30, 
      pictureUrl: "https://www.innovasport.com/medias/IS-H18494-1.jpg?context=bWFzdGVyfGltYWdlc3wxMTkwNzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDBjL2hhMC8xMTE1ODk1MDM0Njc4Mi5qcGd8MDljNWNjODExZjk3ZWNmNjlmYTM1NjEzNGFiYWFlNjZjM2VmODdhOGU1Y2E3NWMyMWJiYTZjNGI1N2FkMjVlNQ",
      description:"El Short adidas Real Madrid Visita 22/23 es parte de la nueva colección de la Casa Blanca, con esta prenda de la marca alemana tendrás una gran comodidad en la cancha y lo podrás combinar con cualquier jersey merengue que tengas en tu colección. "
    }*/
  
  /*
    const db = getFirestore()
    const orderCollection = collection(db,"items")

    addDoc(orderCollection, item_).then(({id}) => 
      console.log("oder con id: "+ id + " creada!")
    )
    */
  //}

  //senOrder()