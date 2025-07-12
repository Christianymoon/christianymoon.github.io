// import styles from './Project.module.css';
import { CardSmall } from '../../components/Cards/Cards.jsx';

export function Projects() {
    return (
        <div className="w-full text-white p-5 bg-black md:h-screen" style={{fontFamily: 'Roboto'}}>
            <h1 className='text-2xl'>Proyectos</h1>
            <p>Algunos proyectos en Github</p>
            <div className="md:grid md:grid-cols-3 md:gap-10 md">
                {/* TODO: Termina de agregar imagenes */}
                <CardSmall
                    title="Matchify"
                    description="Tool for DoS attacks on Wi-Fi network infrastructure using aircrack-ng."
                    category="Cybersecurity"
                    github="https://github.com/Christianymoon/youtube_downloaderproject"
                />

                <CardSmall
                    title="Evil Tube"
                    description="Evil Tube easy video downloader"
                    category="Desktop apps"
                    imageTitle="Portfolio Image"
                    github="https://github.com/Christianymoon/youtube_downloaderproject"
                />

                <CardSmall
                    title="React Clima App"
                    description="A vite weather app with open meteo API"
                    category="Web apps" 
                    imageTitle="Portfolio Image"
                    github="https://github.com/Christianymoon/vite-weather-app"
                    website="https://leon-clima.netlify.app/"
                />

                <CardSmall
                    title="Scriptura"
                    description="A simple task app made with Python and Flet"
                    category="Mobile apps"
                    github="https://github.com/Christianymoon/Scriptura"
                />
            </div>

        </div>
    )
}