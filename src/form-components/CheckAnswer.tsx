import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState("");
    const correct = answer === expectedAnswer;
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </Form.Group>
            <p>{correct ? "✔️" : "❌"}</p>
        </div>
    );
}
