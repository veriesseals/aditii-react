import React from "react";
import WhiteTShirt from '../components/img/white-tshirt.jpg';
import BrownShoes from '../components/img/brown-shoes.jpg';
import GreyTShirt from '../components/img/grey-tshirt.jpg';
import GreyShorts from '../components/img/grey-shorts.jpg';
import RedShoes from '../components/img/red-shoes.jpg';
import BlackTShirt from '../components/img/black-tshirt.jpg';
import OffWhiteTShirt from '../components/img/off-white-tshirt.jpg';
import BlackBag from '../components/img/black-bag.jpg';
import WhitePurse from '../components/img/white-purse.jpg';

function MainContent() {
    return(
        <div>
            <main class="content-section">
                <div class="main-content-section">
                    <div class="main-inner">
                        <div class="main-section-1">
                            <div>
                                <img src={WhiteTShirt} alt="" id="section-1-shirt"/>
                            </div>
                            
                        </div>
                        <div class="right-box">
                            <div>
                                <div class="main-inner-button">
                                    <h1>COWHIDE STANDARD CREW</h1>
                                    <p> White coloured, short-sleeved, printed T-shirt for
                                    men by Levi's. This crew-neck T-shirt is made of
                                    organic cotton and comes in a regular fit.
                                    </p>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                            
                            <div class="sliders">
                                <div><svg class="icon icon-dot-single"></svg></div>
                                <div><svg class="icon icon-dot-single"></svg></div>
                                <div><svg class="icon icon-dot-single"></svg></div>
                                <div><svg class="icon icon-dot-single"></svg></div>
                                <div><svg class="icon icon-dot-single"></svg></div>
                            </div>
                        </div>
                        {/* <div class="clear"></div> */}
                    </div>
                </div>
            
                {/* ------------------------------------------------ */}
                {/* Branded Section */}

                <section class="branded-items">
                    <div class="branded-items-content">
                        <div class="inner-branded-items">
                            <div class="branded-img-group">
                                <div class="branded-figures">
                                    <img src={BrownShoes} alt="" class="branded-imgs"/>
                                </div>

                                <div class="branded-image-button-set1">
                                    <div class="branded-img-shop">
                                        <div class="shoe-button-combo">
                                            <h3>BRANDED SHOES</h3>
                                            <button>SHOP</button>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                                
                            </div>

                            <div class="branded-img-group">
                                <div class="branded-figures">
                                    <img src={GreyTShirt} alt="" class="branded-imgs"/>
                                </div>
                                
                                <div class="branded-image-button-set2">
                                    <div class="branded-img-shop">
                                        <div class="shoe-button-combo">
                                            <h3>BRANDED SHIRTS</h3>
                                            <button>SHOP</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="branded-img-group">
                                <div class="branded-figures">
                                    <img src={GreyShorts} alt="" class="branded-imgs"/>
                                </div>
                                
                                <div class="branded-image-button-set3">
                                    <div class="branded-img-shop">
                                        <div class="shoe-button-combo">
                                            <h3>BRANDED SHORTS</h3>
                                            <button>SHOP</button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>    
                    
                </section>

                {/* End Branded Section */}

                {/* ------------------------------------------------ */}

                {/* Beginning of Featured Bar */}

                <section class="feature-bar">
                    <div class="inner-feature-bar">
                        <h3>FEATURED PRODUCTS</h3>
                    </div>
                    <div class="clear"></div>
                </section>
                {/* End of Featured Bar */}

                {/* ------------------------------------------------ */}
                {/* Beginning the Featured Section */}
                <section class="featured-section">
                    <div class="featured-section-content">
                        <div class="inner-featured-section">

                            {/* Featured-Figures-Top */}

                            <div class="featured-figures-top">

                                {/* figure 1 */}

                                <div class="featured-figures">
                                    <figure class="featured-figures-sub-group">
                                        <div>
                                            <img src={RedShoes} alt=""/>
                                            <figcaption>BRANDED SHOE</figcaption>
                                        </div>
                                        
                                        <div class="featured-products-price">
                                            <div><h3>$300</h3></div>
                                            <div><button>BUY NOW</button></div>
                                        </div>
                                    </figure>
                                    
                                </div>

                                {/* figure 2 */}

                                <div class="featured-figures">
                                    <figure class="featured-figures-sub-group">
                                        <div>
                                            <img src={BlackTShirt} alt=""/>
                                            <figcaption>BRANDED TEE</figcaption>
                                        </div>
                                        
                                        <div class="featured-products-price">
                                            <div><h3>$300</h3></div>
                                            <div><button>BUY NOW</button></div>
                                        </div>
                                    </figure>
                                </div>

                                {/* figure 3 */}

                                <div class="featured-figures">
                                    <figure class="featured-figures-sub-group">
                                        <div>
                                            <img src={OffWhiteTShirt} alt=""/>
                                            <figcaption>BRANDED TEE</figcaption>
                                        </div>
                                        
                                        <div class="featured-products-price">
                                            <div><h3>$300</h3></div>
                                            <div><button>BUY NOW</button></div>
                                        </div>
                                        
                                    </figure>
                                
                                </div>
                                {/* End of Featured-Figures-Top */}
                                {/* <div class="clear"></div> */}
                            </div>

                            {/* Featured-Figures-Bottom */}
                            {/* figure 1 */}
                            <div class="featured-figures-bottom">
                                <div class="featured-figures">
                                    <figure class="featured-figures-sub-group">
                                        <div>
                                            <img src={BlackBag} alt=""/>
                                            <figcaption>BRANDED BAG</figcaption>
                                        </div>
                                        
                                        <div class="featured-products-price">
                                            <div><h3>$300</h3></div>
                                            <div><button>BUY NOW</button></div>
                                        </div>
                                    </figure>
                                </div>

                                {/* figure 2 */}

                                <div class="featured-figures">
                                    <figure class="featured-figures-sub-group">
                                        <div>
                                            <img src={WhitePurse} alt=""/>
                                            <figcaption>BRANDED PURSE</figcaption>
                                        </div>
                                        
                                        <div class="featured-products-price">
                                            <div><h3>$300</h3></div>
                                            <div><button>BUY NOW</button></div>
                                        </div>
                                    </figure>
                                </div>
                                
                                {/* figure 3 */}

                                <div class="featured-figures">
                                    <figure class="featured-figures-sub-group">
                                        <div>
                                            <img src={GreyShorts} alt=""/>
                                            <figcaption>BRANDED SHORTS</figcaption>
                                        </div>
                                        
                                        <div class="featured-products-price">
                                            <div><h3>$300</h3></div>
                                            <div><button>BUY NOW</button></div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                                
                        {/* End of Featured Figures */}
                    </div>
                    

                    {/* <div class="clear"></div> */}
                </section>
                {/* ------------------------------------------------ */}

                {/* Beginning Bottom Nav */}

                <nav class="site-map">
                    <div class="site-map-content">
                        <div class="inner-site-map">
                        {/* Featured Sale */}
                            <div>
                                <h4>FEATURED SALE</h4>
                                <ul>
                                    <li><a href="#"></a>Alexis Hudson</li>
                                    <li><a href="#"></a>American Apparel</li>
                                    <li><a href="#"></a>Ben Sherman</li>
                                    <li><a href="#"></a>Big Buddha</li>
                                    <li><a href="#"></a>Chanel</li>
                                    <li><a href="#"></a>Christian Audigier</li>
                                    <li><a href="#"></a>Coach</li>
                                    <li><a href="#"></a>Cole Haan</li>
                                </ul>
                            </div>
                            {/* End Featured Sale */}
                            {/* Men's Store */}
                            <div>
                                <h4>MEN'S STORE</h4>
                                <ul>
                                    <li><a href="#"></a>Alexis Hudson</li>
                                    <li><a href="#"></a>American Apparel</li>
                                    <li><a href="#"></a>Ben Sherman</li>
                                    <li><a href="#"></a>Big Buddha</li>
                                    <li><a href="#"></a>Chanel</li>
                                    <li><a href="#"></a>Christian Audigier</li>
                                    <li><a href="#"></a>Coach</li>
                                    <li><a href="#"></a>Cole Haan</li>
                                </ul>
                            </div>
                            {/* End Men's Store */}
                            {/* Women's Store */}
                            <div>
                                <h4>WOMEN'S STORE</h4>
                                <ul>
                                    <li><a href="#"></a>Alexis Hudson</li>
                                    <li><a href="#"></a>American Apparel</li>
                                    <li><a href="#"></a>Ben Sherman</li>
                                    <li><a href="#"></a>Big Buddha</li>
                                    <li><a href="#"></a>Chanel</li>
                                    <li><a href="#"></a>Christian Audigier</li>
                                    <li><a href="#"></a>Coach</li>
                                    <li><a href="#"></a>Cole Haan</li>
                                </ul>
                            </div>
                            {/* End Women's Store */}
                            {/* Quick Links */}
                            <div>
                                <h4>QUICK LINKS</h4>
                                <ul>
                                    <li><a href="#"></a>Alexis Hudson</li>
                                    <li><a href="#"></a>American Apparel</li>
                                    <li><a href="#"></a>Ben Sherman</li>
                                    <li><a href="#"></a>Big Buddha</li>
                                    <li><a href="#"></a>Chanel</li>
                                    <li><a href="#"></a>Christian Audigier</li>
                                    <li><a href="#"></a>Coach</li>
                                    <li><a href="#"></a>Cole Haan</li>
                                </ul>
                            </div>
                            {/* End Quick Links */}
                        </div>
                    {/* <div class="clear"></div> */}

                    </div>
                    
                </nav>
            {/* End Nav Bottom Nav */}
            {/* ------------------------------------------------ */}
        </main>
    </div>

    )
};

export default MainContent;
