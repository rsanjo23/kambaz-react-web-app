import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((_item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <Button className="btn-success mb-2" onClick={addElement}>Add Element</Button>
            <ListGroup>
                {array.map((item, index) => (
                    <ListGroupItem className="fs-3 fw-bold" key={index}>
                        {item}
                        <Button className="btn-danger float-end" onClick={() => deleteElement(index)}>
                            Delete
                        </Button>
                    </ListGroupItem>))}
            </ListGroup>
            <hr />
        </div>
    );
}