import React from "react";

function Header() {
    return(
        <div>
            <div className="top">
                {/* Header with Title Bar, Input and Cart */}
                <header class="title-bar">
                    <div class="inner-title-bar">
                        <h1 id="aditii">Aditii</h1>
                        <form action="#"><input type="search" placeholder="Search.." class="search-bar"/>
                        </form>
                        <p class="cart">Cart<span></span>$300</p>

                    </div>
                </header>
                {/* End of Header */}
            </div>

            {/* Beginning of Nav Bar */}
            <nav class="top-navigation-bar">
                <div class="inner-top-nav">
                    <ul id="top-nav-list">
                        <li class="list-1"><a href="#"></a>HOME</li>
                        <li class="bracket-1">|</li>
                        <li class="list-2"><a href="#"></a>SALE</li>
                        <li class="bracket-2">|</li>
                        <li class="list-3"><a href="#"></a>HANDBAGS</li>
                        <li class="bracket-3">|</li>
                        <li class="list-4"><a href="#"></a>WALLETS</li>
                        <li class="bracket-4">|</li>
                        <li class="list-5"><a href="#"></a>ACCESORIES</li>
                        <li class="bracket-5">|</li>
                        <li class="list-6"><a href="#"></a>MENS STORE</li>
                        <li class="bracket-6">|</li>
                        <li class="list-7"><a href="#"></a>SHOES</li>
                        <li class="bracket-7">|</li>
                        <li class="list-8"><a href="#"></a>VINTAGE</li>
                        <li class="bracket-8">|</li>
                        <li class="list-9"><a href="#"></a>SERVICES</li>
                        <li class="bracket-9">|</li>
                        <li class="list-10"><a href="#"></a>CONTACT US</li>
                    </ul>
                    {/* <div class="clear"></div> */}
                </div>
            </nav>
            {/* End Nav Bar */}
        </div>
    )
    
}


export default Header;