import React, { Component } from 'react';
import $ from 'jquery';
import itemImage from '../../img/item-picture.png';

class ItemContent extends Component {
            state = {
                items: [],
            }


    render() {

        return (
          <div className="item-container">
            <img src={itemImage} alt="item-pic"/>
            <br/>
              <a href="/" className="item-title">TÊNIS COURO PUMA R698 Q4 V2</a>
              <div className="avaliation-stars">
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#FF9F1C"/>
                </svg>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9967 4.4595L7.90213 4.13318L6.30189 0.648972L4.70166 4.13845L0.607117 4.4595L3.71647 6.94897L2.78252 10.649L6.30189 8.68581L9.82127 10.649L8.89302 6.94897L11.9967 4.4595ZM6.3019 7.7016L4.16067 8.89634L4.73014 6.64371L2.83948 5.12792L5.33379 4.92792L6.3019 2.80687L7.27571 4.93318L9.77002 5.13318L7.87936 6.64897L8.44883 8.9016L6.3019 7.7016Z" fill="#FF9F1C"/>
                </svg>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9967 4.4595L7.90213 4.13318L6.30189 0.648972L4.70166 4.13845L0.607117 4.4595L3.71647 6.94897L2.78252 10.649L6.30189 8.68581L9.82127 10.649L8.89302 6.94897L11.9967 4.4595ZM6.3019 7.7016L4.16067 8.89634L4.73014 6.64371L2.83948 5.12792L5.33379 4.92792L6.3019 2.80687L7.27571 4.93318L9.77002 5.13318L7.87936 6.64897L8.44883 8.9016L6.3019 7.7016Z" fill="#FF9F1C"/>
                </svg>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9967 4.4595L7.90213 4.13318L6.30189 0.648972L4.70166 4.13845L0.607117 4.4595L3.71647 6.94897L2.78252 10.649L6.30189 8.68581L9.82127 10.649L8.89302 6.94897L11.9967 4.4595ZM6.3019 7.7016L4.16067 8.89634L4.73014 6.64371L2.83948 5.12792L5.33379 4.92792L6.3019 2.80687L7.27571 4.93318L9.77002 5.13318L7.87936 6.64897L8.44883 8.9016L6.3019 7.7016Z" fill="#FF9F1C"/>
                </svg>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9967 4.4595L7.90213 4.13318L6.30189 0.648972L4.70166 4.13845L0.607117 4.4595L3.71647 6.94897L2.78252 10.649L6.30189 8.68581L9.82127 10.649L8.89302 6.94897L11.9967 4.4595ZM6.3019 7.7016L4.16067 8.89634L4.73014 6.64371L2.83948 5.12792L5.33379 4.92792L6.3019 2.80687L7.27571 4.93318L9.77002 5.13318L7.87936 6.64897L8.44883 8.9016L6.3019 7.7016Z" fill="#FF9F1C"/>
                </svg>
              </div>
              <div className="price">
                <div className="last-value"> de R$<span>299,00</span></div>
                <div className="new-value">por R$<span>399,00</span></div>
                <div className="valor-parcelado">ou em 3x de R$133,00</div>
              </div>
              <button>comprar</button>
          </div>
        );
      }
}

export default ItemContent;