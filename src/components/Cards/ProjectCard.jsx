import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
// import './ProjectCard.css';


const ProjectCard = ({ title, githubUrl, projectUrl, media = [], platforms = [] }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentMediaIndex((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentMediaIndex((prev) =>
      prev === media.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="project-card bg-black rounded-xl w-full">
      <div className="project-card-header p-5 flex text-white flex-col">
        <div className='flex flex-col w-3/4
                md:w-1/4'>
          <h1 className="project-title text-white text-xl">{title}</h1>
          <div className="project-icons flex space-x-2 flex-row py-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white icon-link">
                <i className="text-3xl bi bi-github"></i>

              </a>
            )}
            {projectUrl && (
              <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-white icon-link">
                <i className="text-3xl bi bi-link"></i>
              </a>
            )}
          </div>
        </div>
        <div className='pt-5 md:pl-0'>
          <p className='desc'>Una Aplicacion movil y de escritorio para administracion de finanzas usando la formula de contabilidad de balance, registro de gastos y modo solo transacciones para tener control total de tus finanzas.</p>
        </div>
        <div className='platforms pt-5 text-white'>
            {platforms && 
              <div className='text-xl space-x-5'>
                <p className='text-base'>Disponible en: </p> 
                {platforms.includes('windows') && <i className="bi bi-microsoft"></i>}
                {platforms.includes('mac') && <i className="bi bi-android"></i>}
                {platforms.includes('android') && <i className="bi bi-apple"></i>}
                {platforms.includes('linux') && <i className="bi bi-tux"></i>}
              </div>
            }
        </div>
      </div>

      {media.length > 0 ? (
        <div className="carousel-container px-5">
          <div className="carousel-slide h-100">
            <img
              src={media[currentMediaIndex]}
              alt={`Project media ${currentMediaIndex + 1}`}
              className="object-cover h-full w-full"
            />
          </div>

          {media.length > 1 && (
            <>
              <button onClick={handlePrevious} className="carousel-button prev">
                <ChevronLeft size={48} color='#FFFFFF' />
              </button>
              <button onClick={handleNext} className="carousel-button next">
                <ChevronRight size={48} color='#FFFFFF' />
              </button>

              <div className="carousel-indicators">
                {media.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentMediaIndex ? 'active' : ''}`}
                    onClick={() => setCurrentMediaIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="carousel-placeholder">No media available</div>
      )}
    </div>
  );
};

export default ProjectCard;