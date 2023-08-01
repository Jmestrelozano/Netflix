export const AnimationComponentNetflix = ({ onAnimationEnd }: any): JSX.Element => {
    return (
        <div className="container_netflix" onAnimationEnd={onAnimationEnd}>
            <div className="logo">

                <audio autoPlay>
                    <source src="/assets/sounds/intro.mp3" type="audio/mp3" />
                    Tu navegador no admite la reproducción de audio.
                </audio>
                <div className="netflix">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h3>Netflix</h3>
            </div>
        </div>

    );
};