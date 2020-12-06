import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


export default class Logo extends Component {
    render() {
        return (
            <div class="logo-section">
            <div class="row ">
                <div class="col-4">
                    <a href="https://partisepeti.com">
                        <img src="https://www.partisepeti.com/static/assets/img/logo.png" alt="logo"/>
                    </a>
                </div>
                <div class="col-6 logo-section-search">
                    <form class="form-inline">
                        <span class="form-control searchbox">
                        <input id="main-search" class="inputsearch" type="search" placeholder="Ürün ara..." minlength="3" maxlength="200" d aria-label="Ürün ara"/>
                            <button class="btn" type="submit"><span>
                            <img class="searchicon" src="http://www.pngmart.com/files/8/Search-Button-PNG-Image-Free-Download.png"  alt="logo"></img></span>
                            </button>
                        </span>
                    </form>
                </div>
                <div class="col-2 user-nav">
                    <div class="form-control user-navbox">
                        <div class="row">
                            <div class="col-2">
                            <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div class="col-2">
                            <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div class="col-2">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            </div>
                            <div class="col-3">
                            <p>₺0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        )
    }
}
