import React from "react";

export default function foot() {
    let date = new Date().getFullYear();

    return (
        <footer>
            <p align="center">copyright ©  {date}</p>
        </footer>
        
    );
}