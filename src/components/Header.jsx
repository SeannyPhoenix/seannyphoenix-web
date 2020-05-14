import  React  from "react";
import {Row, Navbar, Nav} from "react-bootstrap";

export default function Header(){
    return (<Row>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand>Seanny Drakon Phoenix</Navbar.Brand>
    </Navbar>
    <Nav />
        </Row>);
        
}