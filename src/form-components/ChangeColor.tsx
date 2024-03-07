import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white"
    ];
    const [chosenColor, setChosenColor] = useState(colors[0]);

    const handleColorChange = (color: React.SetStateAction<string>) => () => {
        setChosenColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    name="color"
                    type="radio"
                    id={`inline-radio-${color}`}
                    onChange={handleColorChange(color)}
                    checked={chosenColor === color}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
                .
            </div>
        </div>
    );
}
