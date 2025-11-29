// import { useEffect, useState, useRef } from "react";
// import robot from "../../assets/robot.jpg";
// import Prism from 'prismjs'

import styles from "./Hero.module.css";
import ProjectCard from "../../components/Cards/ProjectCard";
import Avatar from "../../assets/gojo.jpg"


export function Hero() {

  return (
    <div className={styles.hero}>
      <div className="hero-content w-full h-full z-1 flex flex-col items-center justify-center">
        <div className="hero text-white h-screen flex flex-col items-center justify-start
        md:flex-row">
          <div className="hero-cont mt-20 w-full flex flex-col items-center justify-center
          md:flex-row">
            <div className="Circle-Profile w-50 h-50 border-1 border-white rounded-full
          md:mx-20 md:w-75 md:h-75">
              <img className="object-cover w-full rounded-full h-full" src={Avatar} alt="" srcSet="" />
            </div>
            <div className="hero-desc w-full text-center w-100 px-15 py-10
          md:w-2/4 md:text-left">
              <h1 className="text-2xl">Hola! soy Christian Vergara</h1>
              <p className="">Desarrollador de software con 4 anios de experiencia, diseno de API's, Microservicios, Programacion en la nube, Bases de Datos.</p>
              <div className="hero-social pt-10 text-3xl space-x-5">
                <a href="http://github.com/Christianymoon" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>

        </div>
        <h1 className="text-white text-3xl py-10">Top Proyectos</h1>
        <div className="top-projects flex flex-col w-full px-10 md:flex-row">
          <ProjectCard title={'Balance App'} media={['https://raw.githubusercontent.com/Christianymoon/BalanceApp/refs/heads/master/screenshots/main1.jpg', 'https://raw.githubusercontent.com/Christianymoon/BalanceApp/refs/heads/master/screenshots/news.jpg',  'https://placehold.co/500']} githubUrl={'https://github.com'} projectUrl={'https://github.com'} platforms={['windows', 'mac', 'android']}></ProjectCard>
          <ProjectCard title={'EvilTube'} media={['https://placehold.co/200']} githubUrl={'https://github.com'} projectUrl={'https://github.com'}></ProjectCard>
        </div>

      </div>
    </div>
  );
}