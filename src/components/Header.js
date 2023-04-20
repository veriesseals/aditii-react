import React from "react";

function Header() {
    return(
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
    )
    
}


export default Header;