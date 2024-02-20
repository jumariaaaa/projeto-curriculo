import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import "../sobremim.css";

function SobreMimComponent() {
  return (
    <>
      <Container className="mt-5 branco ">
        <Row>
          <h1 className="text-center text-whitesmoke">Sobre mim</h1>
          <Col className="col-md-6 box mt-3 mb-4">
            <p className="paragrafosobremim">
              Olá, meu nome é Júlia Maria Furtado Leite, tenho 16 anos e estou
              atuando na área de TI, mais especificamente em Web Development.
              Resido na região do ABC Paulista e estou adentrando ao mercado de
              trabalho com entusiasmo. Minhas habilidades abrangem tanto o
              Front-end quanto o Back-end, incluindo o desenvolvimento de
              interfaces responsivas com HTML5, CSS3, e JavaScript, além de
              experiência com frameworks como React.js. No Back-end, possuo
              conhecimento em Node.js, MongoDB, MySQL e API Restful. Utilizo
              ferramentas como Git para controle de versão e estou familiarizada
              com metodologias ágeis.
            </p>
          </Col>
          <Col className="col-md-6 mt-3 ">
            <Accordion className="" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="bg-purple">
                  Minha escolaridade
                </Accordion.Header>
                <Accordion.Body>
                  Estudei no Ensino Fundamental I e II, assim como no Ensino
                  Médio, na Escola São Caetano do Sul 222. Aprendi e cresci,
                  construindo uma base sólida durante os primeiros anos e
                  enfrentando desafios acadêmicos e pessoais no Ensino Médio. A
                  experiência na escola foi fundamental para minha formação,
                  preparando-me para os próximos passos em minha jornada
                  educacional e profissional.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className=" mt-4 mb-4 " defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Ensino Técnico</Accordion.Header>
                <Accordion.Body>
                  Atualmente, estou no terceiro termo do curso técnico em
                  Desenvolvimento de Sistemas no SENAI 123. Durante minha
                  formação, tenho me dedicado ao aprofundamento dos
                  conhecimentos em programação, design de software e demais
                  aspectos fundamentais para a área. O ambiente educacional do
                  SENAI 123 tem proporcionado uma aprendizagem prática e
                  alinhada às demandas do mercado de trabalho em TI. Estou
                  entusiasmada para aplicar essas habilidades em projetos
                  práticos e contribuir para a inovação na área de
                  desenvolvimento de sistemas.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SobreMimComponent;
