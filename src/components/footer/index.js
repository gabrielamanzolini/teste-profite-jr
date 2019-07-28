import React from 'react';
import { Container } from 'semantic-ui-react';
import vtexLogo from '../../img/vtex.svg';
import profiteFooter from '../../img/profite-footer-logo.svg';

const Footer = props => {
    return(
        <footer>
            <Container className="footer-container">
                <div className="localization">
                    <h2>Localização</h2>
                    <div className="separador"></div>
                    <div className="localization-address">
                        <div className="address-saopaulo">
                            <h3>São Paulo</h3>
                            <p>Rua do Rócio,</p>
                            <p>423/1801 Vila Olímpia -</p>
                            <p>SP 04552-000</p>
                            <p>+55 11 3333 3333</p>
                        </div>
                        <div className="address-rio">
                            <h3>Rio de Janeiro</h3>
                            <p>Vol. da Pátria, 301/702</p>
                            <p>Botafogo - RJ</p>
                            <p>22270-000</p>
                            <p>+55 21 3333 3333</p>
                        </div>
                    </div>
                </div>
                <div className="contact-content">
                    <button className="btn-contato btn-mail">Entre em Contato</button>
                    <button className="btn-contato btn-consultor">Fale com o nosso consultor online</button>
                </div>
                <div className="powered-by-container">
                    <img src={profiteFooter} alt="logo"/>
                    <img src={vtexLogo} alt="logo"/>
                </div>
            </Container>
            <div className="bottom-separator"></div>
        </footer>
    )
}

export default Footer;