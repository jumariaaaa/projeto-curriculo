import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import FotoCurriculo from "../img/curriculo.jpg";
import "../index.css";
import { CgColorBucket } from "react-icons/cg";

function InicioComponent() {
  return (
    <Container className="centro mt-5 mb-4 montserrat-uniquifier">
      <Row>
        <Col>
          <Image className="size" src={FotoCurriculo} roundedCircle />
          <h1 className="titulo mt-4">Oi, sou a Júlia Maria</h1>
          <p className="subtitulo">
            Venha conhecer um pouco mais sobre essa Web Desenvolver
          </p>
          <Button href="../pages/SobreMim.js" variant="info" size="md">
            Quem sou eu?
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default InicioComponent;
