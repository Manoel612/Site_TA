import React from 'react';
import { Container, Button, Form, InputGroup, Col } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import api from "../conect_back/api";

const SignUp = () => {

  const registrar = (values) => {
    api.post("/usuarios", {
      usuario: values.usuario,
      email: values.email,
      senha: values.senha,
      confirmSenha: values.confirmSenha,
    })
  };

  const { Formik } = formik;

  const schema = yup.object().shape({
    usuario: yup.string().required('campo vazio').min(3, "minimo de 3 caracteres").max(200),
    email: yup.string().required('campo vazio').min(3, "minimo de 3 caracteres").max(400),
    senha: yup.string().required('campo vazio').min(3, "minimo de 3 caracteres").max(400),
    confirmSenha: yup.string().required('campo vazio').min(3, "minimo de 3 caracteres").max(400)
  });

  return (
    <Container>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => { registrar(values) }}

        initialValues={{
          usuario: '',
          email: '',
          senha: '',
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
              <Form.Label>usuario</Form.Label>
              <Form.Control
                type="text"
                name="usuario"
                value={values.usuario}
                onChange={handleChange}
                isInvalid={!!errors.usuario}
              />
              <Form.Control.Feedback type="invalid">{errors.usuario}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback >{errors.email ? errors.email : "OK"}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>senha</Form.Label>
              <Form.Control
                type="password"
                name="senha"
                value={values.senha}
                onChange={handleChange}
                isValid={touched.senha && !errors.senha}
                isInvalid={!!errors.senha}
              />

              <Form.Control.Feedback >{errors.senha ? errors.senha : "OK"}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Confirmar senha</Form.Label>
              <Form.Control
                type="password"
                name="confirmSenha"
                value={values.confirmSenha}
                onChange={handleChange}
                isValid={touched.confirmSenha && !errors.confirmSenha}
                isInvalid={!!errors.confirmSenha}
              />

              <Form.Control.Feedback >{errors.confirmSenha ? errors.confirmSenha : "OK"}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Form>
        )}

      </Formik>
    </Container>
  )
}

export default SignUp;