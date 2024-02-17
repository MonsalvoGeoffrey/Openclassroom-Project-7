import { Link } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import '../styles/Error404.css'


function Error404() {
    return (
        <React.Fragment>
            <Header />
            <main className="error">
                <p className="error-code">404</p>
                <p className="error-description">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
            </main>
        </React.Fragment>
    )
}


export default Error404;