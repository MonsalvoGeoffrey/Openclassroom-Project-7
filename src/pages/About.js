import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer';
import React from 'react'
import Dropdown from '../components/Dropdown';
import '../styles/About.css'
import img_a_proros from '../assets/img_a_proros.jpg'



function About() {
    return (
        <React.Fragment>
            <Header />
            <main className='main-content'>
                <div className='about-banner-wrapper'>
                    <img src={img_a_proros} alt="" className="about-banner" />
                </div>
                <section className='dropdown-containers'>
                    <Dropdown title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</Dropdown>
                    <Dropdown title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Dropdown>
                    <Dropdown title="Service">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Dropdown>
                    <Dropdown title="Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Dropdown>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}


export default About;