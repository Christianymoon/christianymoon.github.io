
// import robot from "../../assets/robot.jpg";
// import Prism from 'prismjs'
import { useEffect } from "react";
import styles from "./Hero.module.css";
import Gojo from "../../assets/gojo.jpg"
import GojoVideo from "../../assets/gojosukunaedit.mp4"
import music from "../../assets/judas.mp3"
import Sukuna from "../../assets/sukuna.jpg"


export function Hero() {



  useEffect(() => {
    const mutteButton = document.getElementById("muteButton");
    const audio = document.getElementById("music");

    mutteButton.addEventListener("click", () => {
      if (audio.muted) {
        audio.muted = false;
        mutteButton.classList.remove("bi-volume-mute");
        mutteButton.classList.add("bi-volume-up");
      } else {
        audio.muted = true;
        mutteButton.classList.remove("bi-volume-up");
        mutteButton.classList.add("bi-volume-mute");
      }
    });
  }, []);


  useEffect(() => {
    const avatar = document.getElementById("avatar");
    const avatarContainer = document.getElementById("avatarContainer");
    const phrase = document.getElementById("phrase");
    const enfasisText = document.getElementsByClassName("enfasis-text");
    const phrase2 = document.getElementById("phrase2");

    avatar.onmouseenter = () => {
      avatar.src = Sukuna;
      avatarContainer.classList.remove("border-purple-500");
      avatarContainer.classList.add("border-red-500");
      avatarContainer.classList.remove(styles.cursedGlowPurple);
      avatarContainer.classList.add(styles.cursedGlowRed);
      phrase.textContent = "The Strongest Developer of the History";
      phrase.classList.remove("from-purple-400");
      phrase.classList.add("from-red-400");
      for (let i = 0; i < enfasisText.length; i++) {
        enfasisText[i].classList.remove("text-purple-400");
        enfasisText[i].classList.add("text-red-400");
      }
    }
    avatar.onmouseleave = () => {
      avatar.src = Gojo;
      avatarContainer.classList.remove("border-red-500");
      avatarContainer.classList.add("border-purple-500");
      avatarContainer.classList.remove(styles.cursedGlowRed);
      avatarContainer.classList.add(styles.cursedGlowPurple);
      phrase.textContent = "The Strongest Developer of Today";
      phrase.classList.remove("from-red-400");
      phrase.classList.add("from-purple-400");
      for (let i = 0; i < enfasisText.length; i++) {
        enfasisText[i].classList.remove("text-red-400");
        enfasisText[i].classList.add("text-purple-400");
      }
    }
  }, []);



  return (
    <div className={styles.hero}>
      <audio id="music" src={music} autoPlay loop></audio>
      <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={GojoVideo} type="video/mp4" />
      </video>
      <div className="absolute p-2 top-1 z-1 right-0">
        <i id="muteButton" className={`bi hover:cursor-pointer text-3xl bi-volume-up ${styles.socialIcon}`}></i>
      </div>
      <div className="hero-content relative flex flex-col items-center justify-center
      md:flex-row">
        <div id="avatarContainer" className={`Circle-Profile my-5 w-50 h-50 border-2 border-purple-500 rounded-full
          md:my-10 md:mx-20 md:w-75 md:h-75 ${styles.cursedGlowPurple}`}>
          <img id="avatar" className="object-cover w-full rounded-full h-full hover:cursor-pointer" src={Gojo} alt="" srcSet="" />
        </div>
        <div className="hero-desc w-full text-center px-5
          md:w-2/4 md:text-left md:px-10 md:py-10">
          <h1 id="phrase" className="text-4xl md:text-4xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
            The Strongest Developer of Today
          </h1>
          <p id="phrase2" className="mt-4 text-purple-200 text-md md:text-lg">
            "Entre los servidores y los clientes, solo yo domino el backend." <br />
            Con 4 años de experiencia en <span className="enfasis-text text-purple-400 font-bold">Sistemas en la nube</span> (Cloud), <span className="enfasis-text text-purple-400 font-bold">Arquitectura Escalable</span> (Microservicios), y <span className="enfasis-text text-purple-400 font-bold">Depuración.</span>
          </p>
          <div className="hero-social py-10 text-3xl space-x-5">
            <a href="http://github.com/Christianymoon" target="_blank" rel="noopener noreferrer">
              <i className={`bi bi-github ${styles.socialIcon}`}></i>
            </a>
            <a href="">
              <i className={`bi bi-instagram ${styles.socialIcon}`}></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}