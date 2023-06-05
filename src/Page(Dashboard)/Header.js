import React from "react"

function Header({setIsAdding}){
    return (
        <header>
            <h1>Address Book Manager</h1>
            <div>
                <button onClick={() => setIsAdding(true)} 
                className="round-button" >Add New Contact</button>
            </div>
        </header>
    );
}

export default Header;