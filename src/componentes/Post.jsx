/* Post individual */
import { Row, Col, Container } from "react-bootstrap";
import Talher from "../assets/talher-bk.svg";
import "../componentes/Post.css";

const Post = (props) => { //{props.sentimento}{props.comida}{props.catImg}
    return (
        <Container className='mb-3 all-contain rounded-4' >
            <Row>
                <Col>
                    <Row>
                        <h3 className="text-usuario" >Usuario anonimo</h3>
                    </Row>
                    <Col className="d-grid align-content-center" style={{height:'80%'}}>
                        <Row className="mb-3 text-up bg-3 rounded-4">
                            <div className="d-flex gap-1">
                                <img src={Talher} alt="talheres" />
                                <div className="d-flex align-items-center ">
                                    <h6 className="text-titulo" >
                                        Refeição:
                                    </h6>
                                </div>
                                <div className="d-flex align-items-center ">
                                    <h5 className="text-titulo-2">
                                        {props.comida}
                                    </h5>
                                </div>
                            </div>

                        </Row>

                        <Row className="bg-4 rounded-4 text-down" style={{ marginLeft:'2%'}}>
                            <div style={{ height: "100%" }}>
                                <p className="text">
                                    {props.sentimento}
                                </p>
                            </div>
                        </Row>
                    </Col>
                </Col>
                <Col lg={4} className="mx-4 my-1 justify-content-center d-flex align-items-center" >
                    <img
                        src={props.catImg}
                        variant='bottom'
                        className='img-cat rounded-3'
                    />
                </Col>

            </Row>
        </Container>
    )
}
/*  <Card className='bg-3 mb-2 card-contain rounded-3'>
     <Card.Body>
         <Row>
             <Col>
                 <Card.Subtitle className="mb-2">
                     Usuario anonimo
                 </Card.Subtitle>
             </Col>
             <Col className='justify-content-end d-flex align-items-end'>
                 <Card.Subtitle style={{fontSize:"12px"}} className="mb-2">
                     Este gato representa minha conquista: 
                 </Card.Subtitle>
             </Col>
         </Row>
         <Row>
             <Col>
                 <Row style={{height:"10%"}} className="mb-3 rounded-3 card-text bg-1">
                     <Card.Text className='rounded-3 bg-1'>
                         Hoje eu comi: {props.comida}
                     </Card.Text>
                 </Row>
                 <Row style={{height:"82%"}} className="mb-3 rounded-3 card-text" >
                     <Card.Text className='rounded-3 textArea'>
                         {props.sentimento}
                     </Card.Text>
                 </Row>
             </Col>
             <Col md={3} className='justify-content-start d-flex align-items-center'>
                 <Card.Img
                     src={props.catImg}
                     variant='bottom'
                     className='card-img'
                     />
             </Col>
         </Row>
     </Card.Body>
 </Card> */

export default Post;