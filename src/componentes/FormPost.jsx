import { useState, useEffect, useContext } from 'react';
import PostContext from "../contexto/postContext";
import api from "../conect_back/api";

import { Container, Image, Button, Form, Card, Col, Row, Modal, InputGroup, ModalHeader } from 'react-bootstrap';
import ScrollContext from "../contexto/scrollContext";
import logoCat from "../assets/gatoRetardado.png";
import Talher from "../assets/talher-bk.svg";
import "./FormPost.css";
import * as formik from 'formik';
import * as yup from 'yup';

const FormPost = (props) => {
    // definição de variavel contexto
    const [posts, setPosts] = useContext(PostContext);
    const [numPosts, setNumPosts] = useContext(ScrollContext);

    // definição de constantes
    const [catImg, setCatImg] = useState('');
    const [numInput, setNumInput] = useState(1);

    // informações nescessarias pra rodar a API
    const apiCats = {
        apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
        apiUrl: import.meta.env.VITE_REACT_CATAPI_URL
    };

    // executar na execução da app

    useEffect(() => {
        getDados();
    }, [numPosts])

    // recebe dados do back and
    const getDados = () => {
        api.get('/posts', {
            params: {
                page: numPosts,
                limit: 4,
            },
        })
            .then(response => response.data)
            .then((data) => {
                if (data.length)
                    setPosts(posts.concat(data));
                getImage();

            })
            .catch(e => console.log(e));
    }

    // recebe dados da catApi
    const getImage = () => {
        // antes de carregar a imagem
        fetch(apiCats.apiUrl, {
            headers: {
                'x-api-key': apiCats.apiKey,
            },
        })
            // imagem carregada
            .then(res => res.json())
            .then(data => {
                setCatImg(data[0].url);
            })
            .catch(e => console.log(e));
    }

    // criando objeto do post que é definido no contexto
    // determinando nova foto



    const enviarPost = (values) => {
        api.post('/posts', {
            txtComida: values.comida,
            txtSent: values.sentimento,
            gato: catImg
        })
            .then(response => response.data)
            .then(resetPage())
            .catch(e => console.log(e));

        // changeShow();
    }

    const resetPage = () => {
        window.location.reload();
        setNumPosts(1);
    }

    // esconde ou mostra o popup
    const changeShow = () => {
        props.setModalVisible(!props.modalVisible);
    }

    // validação front
    const { Formik } = formik;

    const schema = yup.object().shape({
        comida: yup.string().required('campo vazio').min(3, "minimo de 3 caracteres").max(200),
        sentimento: yup.string().required('campo vazio').min(3, "minimo de 3 caracteres").max(400)
    });

    return (
        <>

            <Modal
                show={props.modalVisible}
                backdrop="static"
                keyboard={false}
                onHide={() => { props.setModalVisible(false) }}
            >
                <ModalHeader closeButton ></ModalHeader>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => { enviarPost(values) }}

                    initialValues={{
                        comida: '',
                        sentimento: '',
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form onSubmit={handleSubmit}>

                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik101"
                                className="position-relative"
                            >
                                <Form.Label>comida</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="comida"
                                    value={values.comida}
                                    onChange={handleChange}
                                    isInvalid={!!errors.comida}
                                />
                                <Form.Control.Feedback type="invalid">{errors.comida}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="validationFormik102"
                                className="position-relative"
                            >
                                <Form.Label>Sentimento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sentimento"
                                    value={values.sentimento}
                                    onChange={handleChange}
                                    isValid={touched.sentimento && !errors.sentimento}
                                    isInvalid={!!errors.sentimento}
                                />

                                <Form.Control.Feedback >{errors.sentimento ? errors.sentimento : "OK"}</Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit">Submit form</Button>
                        </Form>
                    )}

                </Formik>
            </Modal>
        </>
    );
}

export default FormPost;

{/* {numInput == 1 &&
    <Form.Group
        as={Col}
        md="4"
        controlId="validationFormik101"
        className="position-relative"
    >
        <Form.Label>O que você comeu?</Form.Label>

        <Form.Control
            type="text"
            name="comida"
            value={values.comida}
            onChange={handleChange}
            isInvalid={!!errors.comida}
        />
        <Form.Control.Feedback md="4">{errors.comida}BLA</Form.Control.Feedback>
    </Form.Group>
}
{numInput == 2 &&   
    <Form.Group
        as={Col}
        md="4"
        controlId="validationFormik102"
        className="position-relative"
    >
        <Form.Label>Como você se sente?</Form.Label>
        <Form.Control
            type="text"
            name="sentimento"
            value={values.sentimento}
            onChange={handleChange}
            isInvalid={!!errors.sentimento}
        />

        <Form.Control.Feedback >{errors.sentimento}</Form.Control.Feedback>
    </Form.Group>
}
<Modal.Footer>
{(numInput < 2) ?
    <Button onClick={() => {  yup.string().min(3).required()
        .validate(values.comida)
        .then(function(value) {
            setNumInput(numInput + 1);
        })
        .catch(function(err) {
            //console.table(err.errors[0]);
            // errors.comida = err.errors[0];
        });  }}>Aparecer</Button>
    :
    <Button type="submit">Submit form</Button>
}
</Modal.Footer> */}