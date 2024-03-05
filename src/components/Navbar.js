import { Container, Stack, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "../components/Navbar.js";

function NavbarComponent() {
  const navLinks = [
    {
      href: "home",
      title: "Início",
    },
    {
      href: "about",
      title: "Sobre",
    },
    {
      href: "skills",
      title: "Habilidades",
    },
    {
      href: "portfolio",
      title: "Portfólio",
    },
    {
      href: "contact",
      title: "Contato",
    },
  ];
  return (
    <Navbar
      expand="lg"
      bg="dar
   k"
      data-bs-theme="dark"
      className="position-fixed"
    >
      <Container>
        <Navbar.Brand href="#home">Júlia Maria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Stack direction="horizontal" gap={3}>
              {navLinks.map((item, i) => {
                return (
                  <Link
                    to={item.href}
                    className="link-nav"
                    smooth={true}
                    offset={0}
                    duration={400}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
