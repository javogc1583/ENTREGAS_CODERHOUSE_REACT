import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap"
import {Link} from "react-router-dom"
/* IMPORTANTE:
- Los argumentos o parametros deben de estar entre llaves
- Si se usa props, no va entre llaves y se toma como un objeto
*/
export const Item = ({item}) => {
    return (
        <>    
        {/*Con base en un modelo de Card de boostrap, se agrega cada item del json*/}
        {/*console.log(item.pictureUrl)*/}    
        <Card style={{ width: '18rem', margin: '5px' }} key={item.id} className="float-start">
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {(item.description.length > 50) ? item.description.substr(0,50)+"..." : item.description }                                        
                </Card.Text>
                <Link to={`/item/${item.id}`}> 
                    <Button variant="primary">Ver detalle</Button>
                </Link>
            </Card.Body>
        </Card>
        </>
    )
}