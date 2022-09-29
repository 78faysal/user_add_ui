import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';
import './AddProducts.css';
import { Form, Container } from 'react-bootstrap';

const AddProducts = () => {

    
    const nameRef = useRef();
    const professionRef = useRef();
    const aboutRef = useRef();
    const imageRef = useRef();

    const handleAddUser = e => {

        const name = nameRef.current.value;
        const profession = professionRef.current.value;
        const about = aboutRef.current.value;
        const image = imageRef.current.value;

        const newProfile = {name, profession, about, image}

        fetch('http://localhost:1000/userInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProfile)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('User added')
                    e.target.reset()
                }
            })

        e.preventDefault();
    }

    return (
        <div className='m-5 addProductForm mx-auto'>
            <Form onSubmit={handleAddUser}>
                <Container>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} placeholder="Enter your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Profession</Form.Label>
                        <Form.Control type="text" ref={professionRef} placeholder="What do you do" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>About</Form.Label>
                        <Form.Control type="text" ref={aboutRef} placeholder="Write something about you" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>About</Form.Label>
                        <Form.Control type="text" ref={imageRef} placeholder="Provide your image link" />
                    </Form.Group>
                   
                    <Button onSubmit={handleAddUser} variant="primary" type="submit">
                        Submit
                    </Button>
                </Container>
            </Form>
        </div>
    );
};

export default AddProducts;