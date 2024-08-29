import { React, Component, useContext } from 'react'
import './../components/Header.css';
import logo from './../images/header/logo.png';
import menu from './../images/header/menu.png';
import { RoutePage } from './RoutePage';
import { MapPage } from './MapPage';
import {  Link, NavLink } from '../../node_modules/react-router-dom/dist/index';
export class Header extends Component {
        constructor(props) {
            super(props);
            this.state = {
                burgerShow: false,
               
                onScrollToFooter: null
            }
        }


    BurgerMenu = () => {

        if (this.state.burgerShow == false) {
            this.setState({ burgerShow: true });
            document.querySelector('.header_list').style.visibility = 'visible';
            document.querySelector('.header_list').style.height = 'auto';
        } else {
            this.setState({ burgerShow: false });
            document.querySelector('.header_list').style.visibility = 'hidden';
            document.querySelector('.header_list').style.height = '0px';
        }
    }

    scrollToBottom() {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
    }

    render() {
        return (
            <div>
                <div class="container_header">
                    <div class="burger_menu">
                        <img onClick={this.BurgerMenu} src={menu} style={{ width: "70px", margin: "0px 0px 0px 0px", cursor: "pointer" }} />
                    </div>
                    <div class="logo">
                        <img src={logo} class="header_img" />
                    </div>
                    <div class="header_list">
                        <ul class="header_ul">
                            <Link to="/" class="header_link"> 
                                <li class="header_li">
                                    Карта
                                </li>
                            </Link>
                            <Link to="/route" class="header_link">
                                <li class="header_li">
                                    Задать маршрут
                                </li>
                            </Link>
                            <Link to="/camera" class="header_link">
                                <li class="header_li">
                                    Камера
                                </li>
                            </Link>
                            <Link to="/history" class="header_link">
                                <li class="header_li">
                                    Состояние
                                </li>
                            </Link>
                            <li class="header_li" onClick={this.scrollToBottom}>Контакты</li>    
                            <li class="header_auth_li">Авторизация</li>
                            <li class="header_reg_li">Регистрация</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}