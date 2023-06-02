import { Container, Form } from "react-bootstrap"
import { useState } from "react"
import { Button } from "react-bootstrap"


export const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return(
        <Container>
            <Form onSubmit={handleConfirm}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={name} onChange={({target}) => setName(target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="text" value={phone} onChange={({target}) => setPhone(target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={({target}) => setEmail(target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear Orden
                </Button>
            </Form>
        </Container>        
    )
}