import { useEffect, useState } from 'react';

const AudioPlayer: React.FC = () => {
    const [audioLoaded, setAudioLoaded] = useState(false);

    useEffect(() => {
        let audioElement = new Audio(`assets/sounds/intro.mp3?${Date.now()}`);

        const handleAudioLoaded = () => {
            setAudioLoaded(true);
        };

        const handleAudioEnded = () => {
            // Aquí puedes agregar la lógica que desees cuando el audio termine de reproducirse
            ;
        };

        audioElement.addEventListener('loadeddata', handleAudioLoaded);
        audioElement.addEventListener('ended', handleAudioEnded);

        // Inicializar el audio
        audioElement.load();

        // Limpieza: Detener el audio y eliminar cualquier recurso cuando el componente se desmonte
        return () => {
            audioElement.pause();
            audioElement.removeEventListener('loadeddata', handleAudioLoaded);
            audioElement.removeEventListener('ended', handleAudioEnded);
        };
    }, []);

    useEffect(() => {
        if (audioLoaded) {
            // Reproducir el audio cuando esté cargado
            const audioElement = new Audio(`assets/sounds/intro.mp3?${Date.now()}`);
            audioElement.play();

            // Ejemplo: Pausar el audio después de 5 segundos
            setTimeout(() => {
                audioElement.pause();
            }, 5000);
        }
    }, [audioLoaded]);

    return null; // Este componente no renderiza nada en el DOM, se utiliza solo para controlar el audio
};

export default AudioPlayer;
