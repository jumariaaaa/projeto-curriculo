import { Container, Row, Col, Stack, Carousel, Image } from "react-bootstrap";
import "../Portifolio.css";
import EnseUm from "../img/enseum.png";
import EnseDois from "../img/ensedois.png";
import EnseTres from "../img/ensetres.png";
import SpUm from "../img/sppmedicalum.png";
import SpDois from "../img/spmedicaldois.png";
import SpTres from "../img/spmedicaltres.png";
import VsegUm from "../img/vovoum.png";
import VsegDois from "../img/vovodois.png";
import VsegTres from "../img/vovotres.png";
function PortifolioComponent() {
  const portfolioData = [
    {
      title: "SP Medical Group",
      description:
        "O SP Medical Group é uma plataforma inovadora para o agendamento de consultas médicas, oferecendo aos usuários uma experiência prática e segura. O site facilita a marcação de consultas, fornece acesso a informações médicas e garante a confidencialidade dos dados dos pacientes. Com uma paleta de cores predominantemente verde, o design do SP Medical Group busca transmitir uma sensação de tranquilidade associada à saúde e ao bem-estar. Essa escolha estética não só reforça a identidade visual do site, mas também cria uma atmosfera online confiável e acolhedora, alinhada à seriedade e confiabilidade do setor de cuidados de saúde.",
      images: [
        {
          img: SpUm,
        },
        {
          img: SpDois,
        },
        {
          img: SpTres,
        },
      ],
    },
    {
      title: "Ênse",
      description:
        "Bem vindo a Ênse, uma plataforma online dedicada a oferecer uma experiência única e envolvente no universo da arte brasileira contemporânea. A paleta de cores meio bege e as formas minimalistas no design do Ense foram escolhidas para criar uma atmosfera elegante e acolhedora. O tom suave do bege busca transmitir uma sensação de calma e sofisticação, permitindo que as obras de arte se destaquem. As formas minimalistas garantem uma navegação descomplicada, centrando a atenção nas próprias obras de arte, oferecendo uma experiência visual limpa e focada. Essa abordagem estética contribui para a apreciação autêntica das obras, destacando a beleza singular de cada peça em um ambiente online que respeita e realça a diversidade artística brasileira.",
      images: [
        {
          img: EnseUm,
        },
        {
          img: EnseDois,
        },
        {
          img: EnseTres,
        },
      ],
    },
    {
      title: "Vovô Seguros",
      description:
        "A Vovô Seguro é uma plataforma inovadora que combina a venda de planos de assistência com uma    pulseira inteligente para garantir a segurança e tranquilidade dos idosos. O site oferece planos personalizados para monitoramento contínuo e assistência imediata em emergências, promovendo o envelhecimento ativo e seguro. O design do site adota uma paleta de cores predominantemente azul, criando uma estética acolhedora e confiável para as famílias, transmitindo uma mensagem de cuidado e proteção.A escolha do azul reforça a identidade visual da Vovô Seguro, contribuindo para uma experiência online que inspira confiança e bem-estar.",

      images: [
        {
          img: VsegUm,
        },
        {
          img: VsegDois,
        },
        {
          img: VsegTres,
        },
      ],
    },
  ];
  return (
    <>
      <Container style={{ color: "white" }} id="portfolio">
        <Row>
          <h1 className="text-center text-white">Portifólio</h1>
        </Row>
        <Row className="mt-4 ">
          {portfolioData.map((item, i) => {
            return (
              <Row className="mb-3 " key={i}>
                <Col xs={12} md={6} className="order-md-2 order-1">
                  <Carousel>
                    {item.images.map((subitem, subi) => (
                      <Carousel.Item key={subi}>
                        <Image src={subitem.img} className="img-portfolio" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
                <Col xs={12} md={6} className="order-md-2 order-1 texto">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </Col>
              </Row>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default PortifolioComponent;
