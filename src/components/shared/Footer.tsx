
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <div className="content-wrapper">
      <footer className="footer bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Om Sidestilt AS</h5>
              <p>
                Sidestilt AS er din dedikerte partner for å skape uforglemmelige opplevelser under russetiden. Vi spesialiserer oss på å tilby førsteklasses russebussutstyr og -tjenester for å gjøre feiringen din ekstraordinær.
              </p>
            </Col>
            <Col md={4}>
              <h5>Kontakt Sidestilt AS</h5>
              <p>
                Telefon: +47 123 456 789 <br />
                E-post: info@sidestilt.no <br />
                Adresse: 456 Russeveien, Festby, RC 67890
              </p>
            </Col>
            <Col md={4}>
              <h5>Følg Sidestilt AS</h5>
              <p>
                Følg oss på sosiale medier for å holde deg oppdatert på de nyeste trendene og spennende tilbud.
              </p>
              <div>
                <a href="#" className="text-light me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-light me-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-light me-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <Link to="/contact" className="btn btn-primary mx-2">Kontakt oss</Link> {}
              <Link to="/about" className="btn btn-primary mx-2">Om oss</Link> {}

            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;