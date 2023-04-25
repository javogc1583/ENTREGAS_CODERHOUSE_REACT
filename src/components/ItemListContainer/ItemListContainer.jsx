import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) => { 
    //console.log(props)   
    return (
        <Container>
            <h1>{props.greeting}</h1>
        </Container>
    )
}