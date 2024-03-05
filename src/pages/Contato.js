// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import * as formik from "formik";
// import * as yup from "yup";
import "../contato.css";

// const ContatoComponent = ({ onSave }) => {
//   const { Formik } = formik;
//   const [nome, setNome] = useState("");
//   const [sobrenome, setSobrenome] = useState("");
//   const [email, setEmail] = useState("");
//   const [cidade, setCidade] = useState("");
//   const [estado, setEstado] = useState("");
//   const [cep, setCep] = useState("");
//   const [mensagem, setMensagem] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave({ nome, sobrenome, email, cidade, estado, cep, mensagem });
//     setNome("");
//     setSobrenome("");
//     setEmail("");
//     setCidade("");
//     setEstado("");
//     setCep("");
//     setMensagem("");
//   };

//   const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     username: yup.string().required(),
//     city: yup.string().required(),
//     state: yup.string().required(),
//     zip: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
//   });

//   return (
//     <Formik
//       validationSchema={schema}
//       onSubmit={console.log}
//       initialValues={{
//         firstName: "",
//         lastName: "",
//         username: "",
//         city: "",
//         state: "",
//         zip: "",
//         terms: false,
//       }}
//     >
//       {({ handleSubmit, handleChange, touched, errors }) => (
//         <Form onSubmit={handleSubmit} id="contact">
//           <Container className="mt-5 boxcont col-md-10 mb-5 ">
//             <Row className="mb-3 ">
//               {" "}
//               <h1
//                 style={{ color: "rgb(116, 190, 203)" }}
//                 className="text-center mb-4  "
//               >
//                 Contato
//               </h1>
//               <Form.Group as={Col} md="4" controlId="validationFormik01">
//                 <Form.Label style={{ color: "white" }}>Nome</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="firstName"
//                   value={nome}
//                   onChange={(e) => setNome(e.target.value)}
//                   // isValid={touched.firstName && !errors.firstName}
//                 />
//                 <Form.Control.Feedback>Ok!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationFormik02">
//                 <Form.Label style={{ color: "white" }}>Sobrenome</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="lastName"
//                   value={sobrenome}
//                   onChange={(e) => setSobrenome(e.target.value)}
//                   // isValid={touched.lastName && !errors.lastName}
//                 />

//                 <Form.Control.Feedback>Ok!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//                 <Form.Label style={{ color: "white" }}>Email</Form.Label>
//                 <InputGroup hasValidation>
//                   <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                   <Form.Control
//                     type="text"
//                     placeholder="Username"
//                     aria-describedby="inputGroupPrepend"
//                     name="username"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     // isInvalid={!!errors.username}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.username}
//                   </Form.Control.Feedback>
//                 </InputGroup>
//               </Form.Group>
//             </Row>
//             <Row className="mb-3">
//               <Form.Group as={Col} md="6" controlId="validationFormik03">
//                 <Form.Label style={{ color: "white" }}>Cidade</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="City"
//                   name="city"
//                   value={cidade}
//                   onChange={(e) => setCidade(e.target.value)}
//                   // isInvalid={!!errors.city}
//                 />

//                 <Form.Control.Feedback type="invalid">
//                   {errors.city}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="3" controlId="validationFormik04">
//                 <Form.Label style={{ color: "white" }}>Estado</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="State"
//                   name="state"
//                   value={estado}
//                   onChange={(e) => setEstado(e.target.value)}
//                   // isInvalid={!!errors.state}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.state}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="3" controlId="validationFormik05">
//                 <Form.Label style={{ color: "white" }}>CEP</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Zip"
//                   name="zip"
//                   value={cep}
//                   onChange={(e) => setCep(e.target.value)}
//                   // isInvalid={!!errors.zip}
//                 />
//               </Form.Group>
//               <Form>
//                 {" "}
//                 <br />
//                 <Form.Group
//                   className="mb-3"
//                   controlId="exampleForm.ControlTextarea1"
//                 >
//                   <Form.Label style={{ color: "white" }}>
//                     Escreva sua mensagem aqui
//                   </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={3}
//                     value={mensagem}
//                     onChange={(e) => setMensagem(e.target.value)}
//                   />
//                 </Form.Group>
//               </Form>
//             </Row>
//             <Form.Group className="mb-3">
//               <Form.Check
//                 required
//                 name="terms"
//                 label="Concordo com os termos e condições"
//                 onChange={handleChange}
//                 // isInvalid={!!errors.terms}
//                 // feedback={errors.terms}
//                 feedbackType="invalid"
//                 id="validationFormik0"
//               />
//             </Form.Group>{" "}
//             <Button type="submit">Mandar mensagem</Button>{" "}
//           </Container>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ContatoComponent;
import React, { useState } from "react";

const Formulario = ({ onSave }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ nome, email });
    setNome("");
    setEmail("");
  };
  return (
    <>
      <p className="titulo">Contato</p>
      <form
        onSubmit={handleSubmit}
        className="caixa-contato text-center"
        style={{ color: "white" }}
      >
        <label>
          Nome:
          <input
            value={nome}
            type="text"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
};

export default Formulario;
