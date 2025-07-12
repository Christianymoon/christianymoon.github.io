import { useEffect, useState, useRef } from "react";
import robot from "../../assets/robot.jpg";
import styles from "./Hero.module.css";
import Prism from 'prismjs'

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
        <img className={styles.image} src={robot} alt="robot" />
      </div>
      <div className="hero-content h-100 w-full z-1 flex items-center justify-center">
        <pre className="pre-code" ref={ref}>
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{ __html: Prism.highlight(codeSnippet, Prism.languages.javascript, "javascript") }}
          />
        </pre>
      </div>
    </div>
  );
}