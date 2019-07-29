import React from 'react';
import { Container } from 'semantic-ui-react'
import logo from '../../img/logo-profite.svg';
import searchIcon from '../../img/search-icon.svg'
import menuIcon from '../../img/hamburger-icon.svg'
import profileIcon from '../../img/profile-icon.svg';
import minicart from '../../img/minicart-vector.svg';
import brazil from '../../img/BR.svg';
import spain from '../../img/ES.svg';
import unitedKingdom from '../../img/GB.svg';

const HeaderMobile = props => {
    return (
        <header>
            <Container>
                <div class="toggle-menu">
                    <ul>
                        <img src={menuIcon}/>
                        <div className="menu-content">
                        <li>
                            <div className="my-acc-content">
                                <img src={profileIcon} alt="profile icon"/>
                                <a href="/">Minha conta</a>
                            </div>
                        </li>
                        <li>
                            <div className="languages-container">
                                <img src={brazil} alt="pt-br"/>
                                <img src={spain} alt="spanish"/>
                                <img src={unitedKingdom} alt="english"/>
                            </div>
                        </li>
                        </div>
                    </ul>
                </div>
                <img src={logo} alt="logo" className="logo"/>
                
                <div className="my-account-container">
                    <div className="mini-cart-content">
                        <img src={minicart} alt="minicart"/>
                        <span className="itens-in-cart"></span>
                    </div>
                </div>

                <div className="ui icon input">
                    <input type="text" placeholder="O que está procurando?"/>
                    <img className="search-icon" src={searchIcon}/>
                </div>
                
            </Container>
        </header>
    )
}

export default HeaderMobile;