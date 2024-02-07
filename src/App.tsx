import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>Welcome - Nathan Wolf Site</h1>
            </header>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={require("./images/Nate_Wolf_web.jpg")}
                            alt="My Headshot Picture"
                        />
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <ol>
                            <li>I am from Cherry Hill, NJ</li>
                            <li>I am a CS Major</li>
                            <li>I am minoring in Business Administration</li>
                        </ol>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
