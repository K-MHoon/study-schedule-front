import React, { useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";

const MemberRegisterForm = ({ onRegister }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleChangeUserName = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const handleChangeAge = useCallback((e) => {
        setAge(e.target.value);
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            onRegister(name, age);
        },
        [name, age, onRegister]
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>이름</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={handleChangeUserName}
                    placeholder="이름을 입력해주세요."
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
                <Form.Label>나이</Form.Label>
                <Form.Control
                    type="text"
                    value={age}
                    onChange={handleChangeAge}
                    placeholder="나이를 입력해주세요."
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default MemberRegisterForm;
