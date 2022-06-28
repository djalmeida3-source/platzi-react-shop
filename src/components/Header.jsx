import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import AppContext from '../context/AppContext';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleMenuLeftToggle = () => {
        setMenuToggle(!menuToggle);
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" onClick={handleMenuLeftToggle}/>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul className={'menu-left' + (menuToggle ? '--active':'')}>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                    {menuToggle && 
                        <div className={menuToggle ? 'settings-user' : ''}>
                            <div className='line'></div>
                            <a href="/">My orders</a>
                            <a href="/">My account</a>
                            <div className='user'>
                                <a className='user-email'>platzi@example.com</a>
                                <a className='singOut'>Sign out</a>
                            </div>
                        </div>
                    }
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li 
                        className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}
                    >
                            <img src={shoppingCart} alt="shopping cart" />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
        </nav>
    );
};

export default Header;