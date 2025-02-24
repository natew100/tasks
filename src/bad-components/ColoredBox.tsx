import React, { useState } from "react";
import { Button } from "react-bootstrap";
export const COLORS = ["red", "blue", "green"];

interface ChangeColorProps {
    setColorIndex: (index: number) => void;
    colorIndex: number;
}

function ChangeColor({
    setColorIndex,
    colorIndex
}: ChangeColorProps): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((colorIndex + 1) % COLORS.length)}>
            Next Color
        </Button>
    );
}

interface ColorPreviewProps {
    colorIndex: number;
}

function ColorPreview({ colorIndex }: ColorPreviewProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
