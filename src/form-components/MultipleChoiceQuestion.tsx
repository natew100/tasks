import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                <Form.Group controlId="multipleChoiceQuestion">
                    <Form.Label>Select an Option</Form.Label>
                    <Form.Select
                        aria-label="Multiple Choice Question Dropdown"
                        onChange={handleChange}
                        value={selectedChoice}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
            </Form>
        </div>
    );
}
