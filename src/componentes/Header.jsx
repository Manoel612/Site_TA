/* cabeçalho da app */
import { Container, Navbar, Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = (props) => {

    return (
        <>
            <Navbar data-bs-theme="dark" className="mb-2 bg-4" sticky="top">
                <Container>
                    <Col className="d-flex justify-content-start">
                        <Navbar.Brand> TA | tua alimentação </Navbar.Brand>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button className="bg-1 hover-shadow" onClick={() => { props.setModalVisible(true) }}>Poste sua refeição aqui + </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <ButtonGroup>
                            <Button className='bg-1'>
                                <Link to={'/signup'}
                                    unstable_viewTransition
                                    style={{ textDecoration: "none", color: "black" }}>
                                    Login
                                </Link>
                            </Button>
                            <Button className='bg-1'>
                                <Link to={'/signup'}
                                    unstable_viewTransition
                                    style={{ textDecoration: "none", color: "black" }}>
                                    Cadastro
                                </Link>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Container>
            </Navbar>
            {/* <div style={{width:"100%", heigth:"8px", display:"block"}} className="bg-1"></div> */}
        </>
    );
}

export default Header;