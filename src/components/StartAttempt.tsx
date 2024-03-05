import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);
    const startQuiz = () => {
        setIsInProgress(true);
        setAttempts((currentAttempts) => currentAttempts - 1);
    };
    const stopQuiz = () => {
        setIsInProgress(false);
    };
    const giveMulligan = () => {
        setAttempts((currentAttempts) => currentAttempts + 1);
    };
    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={isInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={giveMulligan} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
