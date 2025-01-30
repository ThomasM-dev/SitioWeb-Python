import React, { useMemo } from "react";
import "./Home.css";

const Home = () => {
  const words = [
    "Automatización", "scraping", "web", "datos", "análisis", "inteligencia", 
    "machine learning", "redes", "seguridad", "ciberseguridad", "hacking", 
    "bots", "Python", "desarrollo", "web scraping", "bases de datos", "SQL", 
    "NoSQL", "MongoDB", "PostgreSQL", "SQLAlchemy", "Django", "Flask", 
    "FastAPI", "Pygame", "videojuegos", "algoritmos", "estructuras de datos", 
    "programación", "depuración", "pruebas", "testing", "depurador", 
    "funciones", "clases", "objetos", "programación orientada a objetos", 
    "programación funcional", "diseño", "arquitecturas", "RESTful", "APIs", 
    "microservicios", "contenedores", "Docker", "Kubernetes", "CI/CD", "Git", 
    "GitHub", "Docker Compose", "cloud", "AWS", "Azure", "Google Cloud", 
    "servidores", "virtualización", "contenedores", "Redis", "SQLite", "JSON", 
    "XML", "CSV", "Pandas", "NumPy", "Matplotlib", "TensorFlow", "Keras", 
    "scikit-learn", "visión por computadora", "procesamiento de imágenes", 
    "reconocimiento", "voz", "NLP", "Pytorch", "Deep Learning", 
    "reconocimiento de patrones", "redes neuronales", "análisis de sentimientos", 
    "asistentes virtuales", "chatbots", "automatización de procesos", 
    "cron jobs", "tareas", "cronómetro", "monitorización", "logging", 
    "integración continua", "Selenium", "PyTest", "PyQt", "Tkinter", 
    "PyInstaller", "PyGame", "procesamiento", "blockchain", "cryptografía", 
    "IoT", "IoT en casa", "robótica", "modelos predictivos", 
    "procesamiento de audio", "datos estructurados", "Big Data", "Python 3", 
    "multiplataforma", "cross-platform"
  ];

  const getRowPositions = (rows) => {
    const colsPerRow = Math.ceil(words.length / rows); // Número de columnas por fila
    return words.map((_, index) => ({
      top: `${(Math.floor(index / colsPerRow) * 20)}%`,
      left: `${(index % colsPerRow) * (100 / colsPerRow)}%`
    }));
  };

  const positions = useMemo(() => getRowPositions(5), [words]);

  return (
    <div className="home">
      <h1 className="title">
        ¿Qué puedes hacer con <span className="python-text">Python</span>?
      </h1>
      <div className="background-words">
        {words.map((word, index) => (
          <span
            key={index}
            className="word"
            style={positions[index]}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Home;
