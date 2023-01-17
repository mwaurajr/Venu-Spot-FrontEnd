import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Cart = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data here
        console.log(phoneNumber, amount);
    }

    return (
        <Container fluid>
        <div className="container my-5">
            <h1 className="text-center">Payment/Checkout</h1>
            <br/>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter phone number" required />
                </Form.Group>
                <Form.Group controlId="formAmount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount" required />
                </Form.Group>
                <Form.Group controlId="formTitle">
                    <Form.Label>MPESA</Form.Label>
                </Form.Group>
                <Button variant="success" type="submit">
                    Checkout
                </Button>
            </Form>
        </div>
        </Container>
    );
}

export default Cart;
