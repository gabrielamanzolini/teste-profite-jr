import React from 'react';
import { Container } from 'semantic-ui-react'
import logo from '../../img/logo-profite.svg';
import profileIcon from '../../img/profile-icon.svg';
import minicart from '../../img/minicart-vector.svg';
import brazil from '../../img/BR.svg';
import spain from '../../img/ES.svg';
import unitedKingdom from '../../img/GB.svg';

const Header = props => {
    return (
        <header>
            <Container>
                <img src={logo} alt="logo" className="logo"/>
                <div className="ui icon input">
                    <input type="text" placeholder="O que está procurando?"/>
                    <i className="search icon"></i>
                </div>
                <div className="my-account-container">
                    <div className="my-acc-content">
                        <img src={profileIcon} alt="profile icon"/>
                        <a href="/">Minha conta</a>
                    </div>
                    <div className="mini-cart-content">
                        <img src={minicart} alt="minicart"/>
                        <span className="itens-in-cart"></span>
                    </div>
                </div>
                <div className="languages-container">
                    <img src={brazil} alt="pt-br"/>
                    <img src={spain} alt="spanish"/>
                    <img src={unitedKingdom} alt="english"/>
                </div>
            </Container>
        </header>
    )
}

export default Header;