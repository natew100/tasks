import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const buttonText = showAnswer ? "Hide Answer" : "Reveal Answer";
    const answer = showAnswer ? <div>42</div> : null;
    return (
        <div>
            <Button onClick={() => setShowAnswer(!showAnswer)}>
                {buttonText}
            </Button>
            {answer}
        </div>
    );
}
