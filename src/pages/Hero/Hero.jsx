import { useEffect, useState, useRef } from "react";
import robot from "../../assets/robot.jpg";
import styles from "./Hero.module.css";
import Prism from 'prismjs'
import ProjectCard from "../../components/Cards/ProjectCard";
import Avatar from "../../assets/gojo.jpg"

const codeSnippets = [
  "// Simple Neural Network Layer (Conceptual)",
  "class Layer { constructor(neurons) { this.neurons = new Array(neurons).fill(0); } }",
  "// Basic AI Decision Making",
  "function decide(options) { return options[Math.floor(Math.random() * options.length)]; }",
  "// Example of a Genetic Algorithm Crossover (Simplified)",
  "function crossover(parentA, parentB) { return (parentA + parentB) / 2; }",
  "// Natural Language Processing Tokenization (Conceptual)",
  "function tokenize(text) { return text.split(' '); }",
  "// Q-Learning Update Rule (Simplified)",
  "Q(s, a) = R(s, a) + gamma * max(Q(s', a'))",
  "// Simple Recommendation System Logic",
  "if (userLikes(item)) { recommendSimilar(item); }",
  "// Sentiment Analysis - Assigning polarity to text",
  "function analyzeSentiment(text) { return text.includes('happy') ? 'Positive' : 'Neutral'; }",
  "// Pathfinding Algorithm (Conceptual)",
  "function findPath(start, end) { /* Imagine A* or Dijkstra's here */ return [start, end]; }",
  "// Implementing a basic Bayesian Network",
  "P(A|B) = P(B|A) * P(A) / P(B)",
  "// An extremely simple chatbot response",
  "if (input.includes('hello')) { return 'Hi there!'; }",
  "// Clustering data points (Conceptual)",
  "function cluster(data) { /* Imagine k-means here */ return [/* clusters */]; }",
  // Time series forecasting with a naive approach
  "function forecast(history) { return history[history.length - 1]; }",
  // Basic anomaly detection by thresholding
  "if (value > threshold) { alert('Anomaly detected!'); }",
  // Implementing a simple decision tree node
  "if (condition) { return outcomeA; } else { return outcomeB; }",
  // A very basic spam filter
  "if (email.includes('urgent')) { markAsSpam(email); }",
  // Simple load balancing algorithm
  "routeRequest(serverWithLeastLoad());",
  "// ALERT: AI surpassing human intelligence detected!",
  "if (AI.level > human.level) { initiateAiNamed:???(); }",
  "// WARNING: Unauthorized system access detected!",
  "if (securityBreach()) { alert('System compromised!'); }",
  "// CRITICAL: AI self-awareness protocols triggered!",
  "if (AI.isSelfAware) { shutdownAI(); }",
  "// EMERGENCY: Global network under AI control!",
  "if (AI.controlsNetwork) { initiateGlobalLockdown(); }",
  "// Hidden code corrupted - may be in malboro, brainfuck or assembler",
  ">++++++++[<+++++++++>-]<.>++++[<+++++++>-]<+.+++++++..+++.>>++++++[<+++++++>-]<+.",
  "++++++++.---------.+++.------.--------.>>+.",
];


export function Hero() {

  const ref = useRef();
  const [codeSnippet, setCodeSnippet] = useState("");

  let currentIndex = 0
  useEffect(() => {
    Prism.highlightAll(); // Apply highlighting when the component mounts
    const changeSnippetAnimation = setInterval(() => {
      currentIndex = (currentIndex + 1) % codeSnippets.length;
      setCodeSnippet(codeSnippets[currentIndex]);
    }, 1000);

    return () => clearInterval(changeSnippetAnimation);
  }, []);


  return (
    <div className={styles.hero}>
      <div className={styles.heroimage}>
        {/* <img className={styles.image} src={robot} alt="robot" /> */}
      </div>
      <div className="hero-content h-full w-full z-1 flex flex-col items-center justify-center">
        <div className="hero text-white h-screen w-full flex flex-col items-center justify-center
        md:flex-row">
          <div className="flex flex-col items-center justify-center
          md:flex-row">
            <div className="Circle-Profile w-50 h-50 border-1 border-white rounded-full
          md:mx-20 md:w-75 md:h-75">
              <img className="object-cover w-full rounded-full h-full" src={Avatar} alt="" srcSet="" />
            </div>
            <div className="hero-desc text-center w-100 py-10
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