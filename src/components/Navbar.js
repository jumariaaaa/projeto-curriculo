import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  const navLinks = [
    {
      href: "#home",
      title: "Início",
    },
    {
      href: "#about",
      title: "Sobre",
    },
    {
      href: "#skills",
      title: "Habilidades",
    },
    {
      href: "#portfolio",
      title: "Portfólio",
    },
    {
      href: "#contact",
      title: "Contato",
    },
  ];
  return (
    <Navbar
      expand="lg"
      bg="dar
   k"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Júlia Maria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((item, i) => {
              return <Nav.Link href={item.href}>{item.title}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
