import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import ArtistAxios from "../services/artistAxios";
import AuthAxios from "../services/authAxios";

const RegistroPage = () => {
    const [newUser, setNewUser] = useState({});
    const Navigate = useNavigate()

    const updateNewUser = (eventHTML) => {
      const { name, value } = eventHTML.target;
      setNewUser({ ...newUser, [name]: value });
    };
    const createNewUser = (eventHTML) => {
      eventHTML.preventDefault();
      AuthAxios.registro(newUser).then(() => Navigate("/home"));
    };
    

    return (
        <Form className="registro" onSubmit={createNewUser}>
            <h1>Registre</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    name="username"
                    onChange={updateNewUser}
                    type="text"
                    placeholder="pocho"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="pocho@pocho.com"
                    onChange={updateNewUser}
                    name="email"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    onChange={updateNewUser}
                />
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
    );
};

export default RegistroPage;