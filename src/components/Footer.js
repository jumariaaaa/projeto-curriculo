import { Container, Row, Col } from "react-bootstrap";

function FooterComponent() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <ul className="foote_bottom_ul_amrc mt-5">
            <li>
              <a href="">Início</a>
            </li>
            <li>
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href="">Habilidades</a>
            </li>
            <li>
              <a href="">Portfólio</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>

          <p className="text-center">E-mail: juliafurtado1202@gmail.com</p>

          <ul className="social_footer_ul">
            <li>
              <a href="">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
export default FooterComponent;
