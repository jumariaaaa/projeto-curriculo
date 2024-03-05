import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import FotoCurriculo from "../img/curriculo.jpg";
import "../index.css";
import { CgColorBucket } from "react-icons/cg";
import { Link } from "react-scroll";

function InicioComponent() {
  return (
    <Container className="centro mb-4 montserrat-uniquifier" id="home">
      <Row>
        <Col className="mt-5">
          <Image className="size mt-5" src={FotoCurriculo} roundedCircle />
          <h1 className="titulo mt-5">Oi, sou a Júlia Maria</h1>
          <p className="subtitulo mt-2">
            Venha conhecer um pouco mais sobre essa Web Desenvolver
          </p>

          <button>
            <Link to="about">Clique em Mim</Link>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default InicioComponent;
