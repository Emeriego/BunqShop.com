import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link } from 'react-router-dom'
// import { actions, actions2, cartActions, prodActions } from "../store/index"



const Header = () => {
    const qtyFlag = useSelector(state => state.cart.totalQty)


    return (
        <div className='hero_area2 position-fixed w-100 z-index-1090'>
            <header className="header_section">
                <nav className="navbar navbar-expand-lg custom_nav-container pb-0 position-sticky">
                    <Link className="navbar-brand" to="/">
                        <span>
                            craftHUB
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""></span>
                    </button>

                    <div className="collapse navbar-collapse navbar-dark bg-dark" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Why Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Testimonial
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="user_option">
                            <Link to="/login">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>
                                    Login
                                </span>
                            </Link>
                            <div className="cart-bag">
                                <button type="button" class="btn btn-warning position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" style={{ color: 'white' }}></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{qtyFlag}</span>
                                </button>
                            </div>


                            <form className="form-inline ms-4">
                                <button className="btn nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true" style={{ color: 'white' }}></i>
                                </button>
                            </form>
                        </div>
                        View Cart
                    </div>

                </nav>
                {/* <!-- Modal --> */}
               
            </header>

        </div>

    )
}

export default Header;
