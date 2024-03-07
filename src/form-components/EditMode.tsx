import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit mode"
                    checked={isEditMode}
                    onChange={(e) => setIsEditMode(e.target.checked)}
                    className="form-switch"
                />
                {isEditMode ? (
                    <div>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Is a student"
                                checked={isStudent}
                                onChange={handleStudentChange}
                            />
                        </Form.Group>
                    </div>
                ) : (
                    <p>
                        {name} is {isStudent ? "" : "not "}a student.
                    </p>
                )}
            </Form>
        </div>
    );
}
