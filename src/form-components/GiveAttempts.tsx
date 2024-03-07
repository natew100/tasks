import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [amountToGive, setAmountToGive] = useState<number>(0);

    const handleGainAttempts = () => {
        if (amountToGive > 0) {
            setAttempts(attempts + amountToGive);
        }
        setAmountToGive(0);
    };

    const handleUseAttempt = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        setAmountToGive(isNaN(newValue) ? 0 : newValue);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form>
                <Form.Group>
                    <Form.Label>Attempts Left: {attempts}</Form.Label>
                    <Form.Control
                        type="number"
                        value={amountToGive}
                        onChange={handleAmountChange}
                        placeholder="Enter number of attempts to gain"
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    onClick={handleGainAttempts}
                    disabled={amountToGive <= 0}
                >
                    Gain
                </Button>{" "}
                <Button
                    variant="secondary"
                    onClick={handleUseAttempt}
                    disabled={attempts <= 0}
                >
                    Use
                </Button>
            </Form>
        </div>
    );
}
